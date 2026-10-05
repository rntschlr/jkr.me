import {
  MAX_NAME_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_SUBJECT_LENGTH,
  MAX_MESSAGE_LENGTH,
} from "../../src/lib/validation.ts";

interface Env {
  RESEND_API_KEY?: string;
}

const PUBLIC_ORIGINS = new Set(["https://johnkrentschler.me", "https://www.johnkrentschler.me"]);
const LOOPBACK_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);
const MAX_BODY_BYTES = 16_384;
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
const MAX_CLIENTS = 5_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function allowedOrigin(request: Request): string | null {
  const origin = request.headers.get("Origin");
  if (!origin) return null;
  if (PUBLIC_ORIGINS.has(origin)) return origin;
  // Development origins must never authorize calls to the production API.
  const target = new URL(request.url);
  try {
    const source = new URL(origin);
    return LOOPBACK_HOSTS.has(target.hostname) &&
      LOOPBACK_HOSTS.has(source.hostname) &&
      source.protocol === target.protocol
      ? origin
      : null;
  } catch {
    return null;
  }
}

class RequestError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

/** Bound the stream before buffering it, including bodies without Content-Length. */
async function readBody(request: Request): Promise<Record<string, unknown>> {
  const length = request.headers.get("Content-Length");
  if (length && (!/^\d+$/.test(length) || Number(length) > MAX_BODY_BYTES)) {
    throw new RequestError(413, "Request body is too large");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new RequestError(400, "Invalid request");
  const chunks: Uint8Array[] = [];
  let size = 0;
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    void reader.cancel().catch(() => {});
  }, 5_000);
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (timedOut) throw new RequestError(408, "Request timed out");
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        void reader.cancel().catch(() => {});
        throw new RequestError(413, "Request body is too large");
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    const parsed: unknown = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new RequestError(400, "Invalid request");
    }
    return parsed as Record<string, unknown>;
  } finally {
    clearTimeout(timer);
    reader.releaseLock();
  }
}

/** Isolate-local abuse protection; production also needs a Cloudflare edge rule. */
export function createContactHandler(fetchEmail: typeof fetch = fetch, now = Date.now) {
  const clients = new Map<string, { count: number; expires: number }>();
  return async ({ request, env }: { request: Request; env: Env }): Promise<Response> => {
    const origin = allowedOrigin(request);
    const requestId = crypto.randomUUID();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "X-Request-ID": requestId,
      Vary: "Origin",
      ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
    };
    const reply = (status: number, body: object, extra: Record<string, string> = {}) =>
      new Response(JSON.stringify(body), { status, headers: { ...headers, ...extra } });
    if (!origin) return reply(403, { error: "Origin not allowed" });
    const contentType = request.headers.get("Content-Type")?.split(";")[0]?.trim().toLowerCase();
    if (contentType !== "application/json")
      return reply(415, { error: "Expected application/json" });

    const time = now();
    for (const [key, client] of clients) if (client.expires <= time) clients.delete(key);
    // CF-Connecting-IP is supplied by Cloudflare. Never trust X-Forwarded-For.
    const key = request.headers.get("CF-Connecting-IP") ?? "unknown";
    let client = clients.get(key);
    if (!client && clients.size >= MAX_CLIENTS) {
      return reply(429, { error: "Please try again later" }, { "Retry-After": "60" });
    }
    if (!client) {
      client = { count: 0, expires: time + WINDOW_MS };
      clients.set(key, client);
    }
    client.count += 1;
    if (client.count > MAX_REQUESTS) {
      return reply(
        429,
        { error: "Please try again later" },
        {
          "Retry-After": String(Math.max(1, Math.ceil((client.expires - time) / 1000))),
        },
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await readBody(request);
    } catch (error) {
      return reply(error instanceof RequestError ? error.status : 400, {
        error: error instanceof RequestError ? error.message : "Invalid request",
      });
    }
    for (const field of ["name", "email", "subject", "message", "website"]) {
      if (body[field] !== undefined && typeof body[field] !== "string") {
        return reply(400, { error: "Invalid field type" });
      }
    }
    const field = (key: string) => (typeof body[key] === "string" ? body[key].trim() : "");
    const name = field("name");
    const email = field("email");
    const rawSubject = field("subject");
    const message = field("message");
    if (field("website")) return reply(200, { success: true });
    if (!name || !email || !message) return reply(400, { error: "All fields are required" });
    if (
      name.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      rawSubject.length > MAX_SUBJECT_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return reply(400, { error: "Message is too long" });
    }
    if (!EMAIL_PATTERN.test(email)) return reply(400, { error: "Invalid email" });
    if (!env.RESEND_API_KEY?.trim()) {
      return reply(501, { error: "Email service not configured", fallback: "mailto" });
    }
    const subject = (rawSubject || `Contact from ${name}`).replace(/[\r\n]+/g, " ").trim();
    try {
      const response = await fetchEmail("https://api.resend.com/emails", {
        method: "POST",
        signal: AbortSignal.timeout(8_000),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "contact@johnkrentschler.me",
          to: "johnkrentschler@icloud.com",
          subject,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${rawSubject || "(none)"}\n\n${message}`,
          reply_to: email,
        }),
      });
      // Do not log message bodies, email addresses, or provider response content.
      if (!response.ok) {
        console.error("contact.delivery_failed", { requestId, status: response.status });
        await response.body?.cancel();
        return reply(502, { error: "Failed to send" });
      }
      await response.body?.cancel();
      return reply(200, { success: true });
    } catch (error) {
      const timeout = error instanceof Error && ["TimeoutError", "AbortError"].includes(error.name);
      console.error("contact.delivery_unavailable", { requestId, timeout });
      return reply(timeout ? 504 : 502, { error: "Email service is temporarily unavailable" });
    }
  };
}

export const onRequestPost: PagesFunction<Env> = createContactHandler();
export const onRequestOptions: PagesFunction = async ({ request }) => {
  const origin = allowedOrigin(request);
  return new Response(null, {
    status: origin ? 204 : 403,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
      ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
    },
  });
};
export const onRequest: PagesFunction = async () =>
  new Response(null, {
    status: 405,
    headers: { Allow: "POST, OPTIONS", "Cache-Control": "no-store" },
  });
