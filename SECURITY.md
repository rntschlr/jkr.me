# Security Policy

## Supported version

Security fixes are maintained for the current `main` branch only.

## Report a vulnerability

Email **johnkrentschler@icloud.com** with a clear description, reproduction
steps, and potential impact. Do not open a public issue containing exploit
details, credentials, or personal information.

Please allow time for a private investigation before public disclosure.

## Scope

This repository contains a public portfolio and its Cloudflare Pages contact
endpoint. Contact submissions are delivered through Resend when configured.
Never include API tokens, mail provider credentials, or private keys in issues
or commits. Store `RESEND_API_KEY` as a Cloudflare secret, not in a browser
`VITE_` variable.

The contact endpoint needs a Cloudflare edge rate-limiting rule in production.
An in-process or per-isolate limit, if enabled, cannot enforce a global quota.
Review and test security changes before merging into `main`.
