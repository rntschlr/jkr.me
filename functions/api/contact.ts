interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
}

interface Env {
  RESEND_API_KEY?: string;
}

const ALLOWED_ORIGINS = [
  "https://johnkrentschler.me",
  "https://www.johnkrentschler.me",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:8788",
  "http://127.0.0.1:8788",
];

const MAX_BODY_SIZE = 16_384;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getCorsOrigin(request: Request): string | null {
  const origin = request.headers.get("Origin") ?? "";
  return ALLOWED_ORIGINS.includes(origin) ? origin : null;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("Origin");
  return !!origin && ALLOWED_ORIGINS.includes(origin);
}

function createJsonHeaders(request: Request): Record<string, string> {
  const origin = getCorsOrigin(request);

  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    Vary: "Origin",
    ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
  };
}

function createOptionsHeaders(request: Request): Record<string, string> {
  const origin = getCorsOrigin(request);

  return {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
    ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
  };
}

function normalizeField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function exceedsMaxLength(value: string, maxLength: number): boolean {
  return value.length > maxLength;
}

function sanitizeSubject(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = createJsonHeaders(request);

  try {
    if (!isAllowedOrigin(request)) {
      return new Response(JSON.stringify({ error: "Origin not allowed" }), {
        status: 403,
        headers,
      });
    }

    const contentType = request.headers.get("Content-Type")?.toLowerCase() ?? "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Expected application/json" }), {
        status: 415,
        headers,
      });
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE) {
      return new Response(JSON.stringify({ error: "Request body is too large" }), {
        status: 413,
        headers,
      });
    }

    const body = JSON.parse(rawBody) as ContactBody;
    const name = normalizeField(body.name);
    const email = normalizeField(body.email);
    const rawSubject = normalizeField(body.subject);
    const message = normalizeField(body.message);
    const website = normalizeField(body.website);

    // Honeypot — if filled, it's a bot
    if (website) {
      // Return 200 so bots think it worked
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers,
      });
    }

    if (
      exceedsMaxLength(name, MAX_NAME_LENGTH) ||
      exceedsMaxLength(email, MAX_EMAIL_LENGTH) ||
      exceedsMaxLength(rawSubject, MAX_SUBJECT_LENGTH) ||
      exceedsMaxLength(message, MAX_MESSAGE_LENGTH)
    ) {
      return new Response(JSON.stringify({ error: "Message is too long" }), {
        status: 400,
        headers,
      });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers,
      });
    }

    const subject = sanitizeSubject(rawSubject);

    // If an email service is configured, deliver the message
    if (env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "contact@johnkrentschler.me",
          to: "johnkrentschler@icloud.com",
          subject: subject || `Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
          reply_to: email,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error", { status: res.status });
        return new Response(JSON.stringify({ error: "Failed to send" }), {
          status: 502,
          headers,
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    // No email service configured — tell the client to fall back to mailto
    console.log("Contact form received without email service configured", {
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ error: "Email service not configured", fallback: "mailto" }),
      { status: 501, headers },
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers,
    });
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async ({ request }) => {
  if (!isAllowedOrigin(request)) {
    return new Response(null, {
      status: 403,
      headers: createOptionsHeaders(request),
    });
  }

  return new Response(null, {
    status: 204,
    headers: createOptionsHeaders(request),
  });
};
