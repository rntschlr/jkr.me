# Operations

This portfolio has a React frontend and a Cloudflare Pages contact function.
It has no user-account database. Email delivery depends on Resend; the function
is not a durable message queue.

## Release checks

1. Use Node 22.13+ and `npm ci`.
2. Run `npm run check`. This includes API regression tests and dependency audits
   for production and build dependencies.
3. Run `npm run build`, then `npx wrangler pages dev dist`. Verify the contact
   form in both languages, required-field validation, error recovery, and the
   unconfigured-service mailto fallback. Do not use real recipient data in tests.
4. Review the pull request and passing CI before merging. Pushes to `main`
   trigger deployment. The GitHub check job has read-only repository permissions.
5. After deployment, verify the homepage, mobile navigation, and contact delivery
   with one intentional test message. A successful build does not prove delivery.

## Contact delivery and abuse controls

Configure `RESEND_API_KEY` as a Cloudflare Pages secret and verify the sender
domain with Resend. Never put this secret into a Vite variable or source control.
Without the key, the API returns a mailto fallback instead of claiming delivery.

Configure an edge rate limit on `/api/contact`: start at 10 requests/minute/IP
and tune against observed legitimate traffic. The code's 10/minute throttle is
bounded to 5,000 clients **per isolate**, so it is only supplemental protection.
It is not a distributed quota, bot identity check, or proof that the edge rule is
configured. `Origin` checks restrict browsers; non-browser clients can spoof it.

The function limits request bodies to 16 KiB while reading them, rejects malformed
field types, and times out body reads and provider requests. Its request ID is
returned as `X-Request-ID`. Error logs contain the ID, failure category, and provider
status, not the sender's email, message body, credentials, or provider response.

A successful provider response means accepted by Resend, not delivered to an
inbox. Provider errors produce 502/504. The UI preserves entered text on uncertain
network failures and does not open another send automatically. The endpoint does
not retry delivery, which avoids introducing duplicate sends during outages.

## Monitor and recover

- Monitor homepage availability separately from contact-function 5xx and 429
  rates. Investigate provider quota, sender-domain state, and edge limits.
- Use the request ID to correlate an error. Do not log message content to debug it.
- Roll back to a known-good Cloudflare Pages deployment for a release regression,
  then revert the offending commit through a PR so the next deploy retains the fix.
- Rotate a compromised email key in the provider and Cloudflare, then verify delivery.
- Keep deployment credentials scoped to the intended Cloudflare account/project.

## Remaining production verification

Repository tests use a stub email provider. They cannot establish that DNS, the
sender domain, production secrets, edge throttling, alert routing, or delivery
are configured. These checks require the deployed Cloudflare/Resend environment.
This project does not claim an SLA, high availability test, or compliance certification.
