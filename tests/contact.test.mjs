import assert from "node:assert/strict";
import { test } from "node:test";
import { createContactHandler, onRequestOptions, onRequest } from "../functions/api/contact.ts";

const valid = { name: "Jack", email: "person@example.com", message: "Hello", subject: "Question" };
function context(body = valid, headers = {}, url = "https://johnkrentschler.me/api/contact") {
  return {
    request: new Request(url, {
      method: "POST",
      headers: {
        Origin: "https://johnkrentschler.me",
        "Content-Type": "application/json",
        ...headers,
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
    env: { RESEND_API_KEY: "test-placeholder" },
  };
}
function fixture(now) {
  const calls = [];
  const handler = createContactHandler(async (...args) => {
    calls.push(args);
    return new Response("{}", { status: 200 });
  }, now);
  return { calls, handler };
}

test("valid submissions send one email with no-store and trace ID", async () => {
  const { handler, calls } = fixture();
  const response = await handler(context());
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.match(response.headers.get("x-request-id"), /^[\da-f-]{36}$/);
  assert.equal(calls.length, 1);
  const [url, options] = calls[0];
  assert.equal(url, "https://api.resend.com/emails");
  assert.ok(options.signal instanceof AbortSignal);
  assert.equal(JSON.parse(options.body).reply_to, valid.email);
});

test("untrusted, missing, and development origins cannot send to production", async () => {
  for (const origin of ["https://evil.example", "http://localhost:5173", "null", ""]) {
    const { handler, calls } = fixture();
    const response = await handler(context(valid, { Origin: origin }));
    assert.equal(response.status, 403);
    assert.equal(response.headers.get("access-control-allow-origin"), null);
    assert.equal(calls.length, 0);
  }
  const { handler } = fixture();
  assert.equal(
    (
      await handler(
        context(valid, { Origin: "http://localhost:5173" }, "http://localhost:8788/api/contact"),
      )
    ).status,
    200,
  );
});

test("malformed payloads and field types do not reach email provider", async () => {
  for (const body of [
    "{",
    "null",
    "[]",
    "true",
    {},
    { ...valid, email: [] },
    { ...valid, message: null },
    { ...valid, subject: 42 },
    { ...valid, email: "bad" },
    { ...valid, name: "x".repeat(101) },
    { ...valid, message: "x".repeat(5001) },
  ]) {
    const { handler, calls } = fixture();
    assert.equal((await handler(context(body))).status, 400);
    assert.equal(calls.length, 0);
  }
});

test("only the JSON media type is accepted", async () => {
  const { handler, calls } = fixture();
  assert.equal(
    (await handler(context(valid, { "Content-Type": "text/application/json" }))).status,
    415,
  );
  assert.equal(calls.length, 0);
  assert.equal(
    (await handler(context(valid, { "Content-Type": "application/json; charset=utf-8" }))).status,
    200,
  );
});

test("body limit measures bytes and cancels oversized chunked streams", async () => {
  const { handler, calls } = fixture();
  assert.equal((await handler(context({ ...valid, message: "é".repeat(9000) }))).status, 413);
  assert.equal((await handler(context(valid, { "Content-Length": "999999" }))).status, 413);
  let cancelled = false;
  const body = new ReadableStream({
    pull(controller) {
      controller.enqueue(new Uint8Array(9000));
    },
    cancel() {
      cancelled = true;
    },
  });
  const c = context();
  c.request = new Request(c.request.url, {
    method: "POST",
    headers: c.request.headers,
    body,
    duplex: "half",
  });
  assert.equal((await handler(c)).status, 413);
  assert.equal(cancelled, true);
  assert.equal(calls.length, 0);
});

test("honeypot and missing service never send mail", async () => {
  const { handler, calls } = fixture();
  assert.equal((await handler(context({ ...valid, website: "bot" }))).status, 200);
  const c = context();
  c.env = {};
  const response = await handler(c);
  assert.equal(response.status, 501);
  assert.equal((await response.json()).fallback, "mailto");
  assert.equal(calls.length, 0);
});

test("rate limits isolate clients and reset after the window", async () => {
  let time = 1000;
  const { handler, calls } = fixture(() => time);
  for (let i = 0; i < 10; i++) assert.equal((await handler(context())).status, 200);
  const limited = await handler(context());
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("retry-after"), "60");
  assert.equal(calls.length, 10);
  assert.equal((await handler(context(valid, { "CF-Connecting-IP": "192.0.2.1" }))).status, 200);
  time += 60_000;
  assert.equal((await handler(context())).status, 200);
});

test("provider errors, network failures, and timeouts are server errors without leaking data", async () => {
  for (const [fetcher, status] of [
    [async () => new Response("private-provider-detail", { status: 429 }), 502],
    [
      async () => {
        throw new Error("private-network-detail");
      },
      502,
    ],
    [
      async () => {
        throw new DOMException("private-timeout-detail", "TimeoutError");
      },
      504,
    ],
  ]) {
    const response = await createContactHandler(fetcher)(context());
    assert.equal(response.status, status);
    assert.doesNotMatch(await response.text(), /private-/);
  }
});

test("subject headers cannot contain line breaks", async () => {
  const { handler, calls } = fixture();
  await handler(context({ ...valid, subject: "Hello\r\nBcc: other@example.com" }));
  assert.doesNotMatch(JSON.parse(calls[0][1].body).subject, /[\r\n]/);
});

test("preflight and unsupported methods return explicit statuses", async () => {
  assert.equal((await onRequestOptions(context())).status, 204);
  assert.equal(
    (await onRequestOptions(context(valid, { Origin: "https://evil.example" }))).status,
    403,
  );
  const response = await onRequest();
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "POST, OPTIONS");
});
