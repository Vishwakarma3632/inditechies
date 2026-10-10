# Inditechies website

A responsive IT consulting and digital engineering website built with Next.js App Router, TypeScript, Tailwind CSS v4, and Motion for React.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment configuration

- `NEXT_PUBLIC_SITE_URL`: production canonical origin, for example `https://www.inditechies.com`.
- `NEXT_PUBLIC_CONTACT_EMAIL`: contact address displayed by the site.
- `NEXT_PUBLIC_CAREERS_EMAIL`: careers address used by application mail links.
- `NEXT_PUBLIC_INDEXING`: set to `true` to enable indexing or `false` to block it. Production deployment configuration should be reviewed before launch.

Never put secrets in `NEXT_PUBLIC_*` variables. Contact and careers forms are currently frontend-only / email-link experiences and do not send submissions to a server.

## Main routes

- `/` — homepage and hero slider
- `/services` — services overview and capabilities
- `/projects` — illustrative case studies
- `/projects/[slug]` — case study detail
- `/careers` — working principles and sample role listings
- `/contact` — contact information and validated frontend form
- `/insights` — thought leadership and category/search controls
- `/insights/[slug]` — insight detail
- `/about` — company positioning and working principles
- `/blog` — engineering notes, tutorials, and company updates
- `/blog/[slug]` — article detail

SEO metadata is centralized through `lib/seo.ts` and `config/site.ts`. The App Router `sitemap.ts` and `robots.ts` files provide sitemap and crawler directives. Structured data helpers live in `lib/structured-data.ts`.

## Verification

```bash
npm run lint
npm run build
```

Review sample content, email addresses, canonical domain, image assets, and indexing configuration before production launch. Project case studies are explicitly illustrative; replace them with approved client work before presenting them as real engagements.
