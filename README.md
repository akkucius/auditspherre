# Auditspherre

**Precision. Compliance. Trust.**

Website for [Auditspherre](https://github.com/akkucius/auditspherre) — a specialist audit firm offering SEBI-mandated stock broker audits and cybersecurity audits for regulated entities in India.

## Overview

This repo contains two layers:

1. **Main site (Next.js)** — React/Tailwind app at the root routes (`/`, `/services`, `/about`, `/contact`)
2. **Design previews (static HTML)** — five Claude-generated design versions served at `/v1` through `/v5` for side-by-side comparison before picking a final design

## Live routes

### Main site

| Page | Route |
|------|-------|
| Homepage | `/` |
| Services | `/services` |
| About | `/about` |
| Contact | `/contact` |

### Design previews

| Version | Type | Routes |
|---------|------|--------|
| v1 | Multi-page | `/v1`, `/v1/services`, `/v1/about`, `/v1/contact` |
| v2 | Multi-page | `/v2`, `/v2/services`, `/v2/about`, `/v2/contact` |
| v3 | Multi-page | `/v3`, `/v3/services`, `/v3/about`, `/v3/contact` |
| v4 | SPA (single page) | `/v4` |
| v5 | SPA (single page) | `/v5` |

v4 and v5 are single-page layouts with in-page anchor navigation (`#services`, `#about`, `#contact`). v1–v3 are full multi-page HTML sites.

## Tech stack

- [Next.js](https://nextjs.org/) 13
- [React](https://react.dev/) 18
- [Tailwind CSS](https://tailwindcss.com/)
- Static HTML/CSS/JS design previews (v1–v5)

## Prerequisites

- Node.js 18+
- npm

## Getting started

```bash
git clone https://github.com/akkucius/auditspherre.git
cd auditspherre
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Design previews are available immediately after `npm run dev` — no extra steps needed.

### Other commands

```bash
npm run copy-designs   # Copy design/claude-design → public/v*
npm run build          # Production build (runs copy-designs first)
npm start              # Serve production build locally
```

## Project structure

```
auditspherre/
├── components/              # Next.js shared UI (Navbar, Footer, PageHead)
├── design/
│   └── claude-design/       # Source HTML designs (edit these)
│       ├── v1/ … v5/        # Five design versions
├── pages/                   # Next.js routes (main site)
├── public/                  # Static assets (v1–v5 generated here at build)
├── scripts/
│   └── copy-designs.js      # Copies & patches designs for deployment
├── styles/                  # Global Tailwind styles
├── auditspherre-site-prompt.md   # Full design brief & content spec
├── next.config.js           # Rewrites for /v1–/v5 clean URLs
└── package.json
```

## How design previews work

Design files live in `design/claude-design/`. They are **not** served directly.

On `npm run dev` and `npm run build`, `scripts/copy-designs.js` automatically:

1. Copies v1–v3 (all pages + assets) into `public/v1`, `public/v2`, `public/v3`
2. Copies v4–v5 (`index.html` only) into `public/v4`, `public/v5`
3. Injects `<base href="/vN/">` so CSS, JS, and images resolve correctly
4. Rewrites internal links to clean URLs (e.g. `/v3/services`)

`public/v1`–`public/v5` are gitignored and regenerated on every build.

### Updating a design

1. Edit files in `design/claude-design/vN/`
2. Run `npm run copy-designs` (or restart `npm run dev`)
3. Refresh the browser

## Deploying to Vercel

1. Import the [GitHub repo](https://github.com/akkucius/auditspherre) on Vercel
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `npm run build` (default)
4. No environment variables required for the current setup
5. Add custom domain `auditspherre.com` in Vercel → Settings → Domains

Vercel runs `prebuild` → `copy-designs` automatically, so design previews deploy alongside the Next.js app.

### Post-deploy checklist

- [ ] `auditspherre.com` loads the main site
- [ ] `auditspherre.com/v1` through `/v5` load correctly
- [ ] v1–v3 sub-pages work (`/v3/services`, etc.)
- [ ] No 404s for `shared.css` or `shared.js` in browser DevTools

## Design brief

See [`auditspherre-site-prompt.md`](auditspherre-site-prompt.md) for the full brand direction, page content, colour palette, and layout specification.

## Search engine indexing

The site is **blocked from search engines** while in preview:

- `public/robots.txt` — `Disallow: /` for all crawlers
- `<meta name="robots" content="noindex, nofollow">` on all Next.js and design preview pages
- `X-Robots-Tag: noindex, nofollow` response header on all routes

Remove these rules before launching publicly.

## Environment variables

Not required today. When adding form backends or analytics, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## License

Private project — all rights reserved.
