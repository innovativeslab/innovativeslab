# Status (honest)

This file describes what the AUTHOR verified. Anything that ran on your machine or in GitHub Actions is reported in the pull request descriptions and CI, not here.

## Written
All 22 requested pages (10 service pages incl. technical consulting), reusable components, quote/consultation/contact forms with server validation, honeypot + timing + DB-backed rate limiting, lead storage schema, Resend email notification, admin sign-in, lead list with search/filter/pagination, lead detail with status, notes and deletion, CSV export with formula-injection protection, sitemap, robots, canonical/Open Graph metadata, JSON-LD, consent-gated GA4, security headers, unit tests for validation, docs.

## Light redesign (branch feature/light-redesign)
- Design tokens migrated from dark to a light brand system (`tailwind.config.ts`); all pages, forms, footer and the admin dashboard inherit it.
- Portfolio: FunnelBeam, TuneRegistry, MENT, Cheetay with cards, detail pages, homepage preview and sitemap entries.
- Not touched: `/api/leads`, `src/lib/email.ts`, `prisma/schema.prisma`, migrations, auth, middleware.
- Mismatch with the brief: this codebase has NO Slack lead notifications and NO Calendly embed (only an optional `NEXT_PUBLIC_BOOKING_URL` link and Resend email). If your live repo has those, this branch does not conflict with them but was not tested against them.
- ESLint is not configured in this repository, so linting has not been run.

## Verified (in the authoring sandbox)
- All 51 TypeScript/TSX files parse with no syntax errors.
- Service content data is internally consistent (10 services, no duplicate slugs, valid related links).

## NOT verified
- `npm install`, `tsc`, `next build`, `vitest` have NOT been run: the sandbox had no network access. Expect a few type or build fixes on first run.
- Nothing has been run in a browser: layout, responsiveness, contrast, keyboard behaviour and cross-browser behaviour are untested.
- The migration `0001_init` was hand-written from the Prisma schema (no database was available) and has not been applied. Apply it to a throwaway database first and run `npx prisma migrate diff` to confirm it matches the schema. Form submission, email delivery and admin login have not been exercised end to end.
- No deployment exists; there is no live URL.
- The `Bricolage_Grotesque` font from next/font/google could not be confirmed against Next 14.2.15's font list; if the build complains, swap it in `src/app/layout.tsx`.

## Known limitations / deliberate decisions
- File attachments are not implemented (secure upload needs object storage and malware scanning); the form says so.
- No strict Content-Security-Policy yet (needs nonce setup); other security headers are set.
- Admin sessions are stateless 8-hour JWTs (no per-session revocation). Single role.
- Rate limiting is DB-based and not perfectly atomic under heavy concurrency; fine for lead-form volumes.
- "Business email" is not enforced by blocking free-mail domains, to avoid losing real leads.
- Legal pages are templates with bracketed placeholders and a visible draft banner.
