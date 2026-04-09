# johnkrentschler.me

Personal portfolio site for John Rentschler — developer, fintech, and networker.

**Live:** [johnkrentschler.me](https://johnkrentschler.me)

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript 5.7, Vite 6 |
| Styling | Tailwind CSS 3, custom CSS variables |
| API | Cloudflare Pages Functions |
| Email | [Resend](https://resend.com) |
| Hosting | Cloudflare Pages |

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (included as a dev dependency)

### Setup

```bash
git clone https://github.com/rntschlr/johnkrentschler.me.git
cd johnkrentschler.me
npm install
```

### Environment Variables

Copy the example vars file for local development:

```bash
cp .dev.vars.example .dev.vars
```

Then fill in your values in `.dev.vars`. See [`.dev.vars.example`](.dev.vars.example) for reference.

> **Note:** Cloudflare Pages Functions use `.dev.vars` instead of `.env`. This file is gitignored.

### Run

```bash
# Start the Vite dev server (frontend only)
npm run dev

# Start with Cloudflare Functions (runs contact API locally)
npx wrangler pages dev dist --compatibility-date=2024-12-01
# Run `npm run build` first, or open two terminals and combine both
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | TypeScript type-check only |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting without writing |

## Project Structure

```
.
├── functions/
│   └── api/
│       └── contact.ts     # Cloudflare Pages Function — email endpoint
├── public/
│   ├── _headers           # Cloudflare security + cache headers
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # React section components
│   ├── hooks/             # Custom React hooks
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── wrangler.toml
```

## Deployment

The site deploys automatically to Cloudflare Pages on every push to `main` via GitHub Actions.

### Manual Deploy

```bash
npm run build
npx wrangler pages deploy dist
```

### Cloudflare Pages Secrets

Set `RESEND_API_KEY` in your Cloudflare Pages project settings under **Settings → Environment variables**.

Without this variable, the contact form falls back to a `mailto:` link automatically.

## Contact Form

The contact form at `/api/contact` is a Cloudflare Pages Function that:

- Validates required fields (name, email, message)
- Rejects bots via a honeypot field
- Sends email via [Resend](https://resend.com) if `RESEND_API_KEY` is set
- Returns a `501` with `"fallback": "mailto"` if the key is absent — the frontend handles this gracefully

## License

MIT
