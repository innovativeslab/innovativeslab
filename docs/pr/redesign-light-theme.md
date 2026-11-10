## Light-theme redesign and portfolio expansion

### What changed
- New light brand system (tokens in `tailwind.config.ts`), applied to every page, the forms, footer and the admin dashboard.
- Portfolio: FunnelBeam, TuneRegistry, MENT (Getment) and Cheetay Food Delivery as consistent cards, with a `/projects/[slug]` detail page each, a prominent homepage preview, and sitemap entries.
- Homepage restructured: hero, portfolio, services, technical capabilities, app rescue, problems, process, commitments, FAQ, closing CTA.

### Design decisions
- Palette refined from the suggested one after computing WCAG contrast: secondary text `#56657A` (5.9:1 on white, 5.6:1 on soft; the suggested `#64748B` is 4.48:1 on the soft background), form borders `#8392A5` (3.2:1) because `#E5E7EB` is only 1.2:1, cyan used for decoration only.
- Reused existing components; `ProjectCard`, `ProjectVisual` and `portfolio.ts` are new. Adding a project is one array entry.
- No new dependencies.

### Portfolio content rules followed
- URLs for FunnelBeam, TuneRegistry and MENT were opened and confirmed live. Copy is original; no statistics, quotes or screenshots were taken from those sites.
- Cheetay has no verified URL in the repository, so none was invented; its card links to its detail page.
- Cards use original illustrations labelled "Illustration", not screenshots. External links use `target="_blank" rel="noopener noreferrer"` and announce "(opens in a new tab)".
- The `role` field (what Innovations Labs did) is empty, so no involvement is claimed.

### Not touched
`src/app/api/leads`, `src/lib/email.ts`, `src/lib/auth.ts`, `src/middleware.ts`, `prisma/schema.prisma`, `prisma/migrations`, `.env.example`.

### Testing status
{{VERIFICATION}}

Not performed by the author: build, typecheck, tests, ESLint (not configured), browser or device testing, link clicking in a browser.

### Known issues
- Nothing has been viewed in a browser; spacing and responsive behaviour are unverified.
- This repository has no Slack notification or Calendly embed, unlike the brief; see `docs/STATUS.md`.
- Owner input needed: portfolio `role` text, real screenshots (optional), Cheetay URL, permission to list the projects.

### Review notes
Base this on `main` after the five stage PRs are merged, or on `integration/innovations-labs`. Merge with a merge commit.
