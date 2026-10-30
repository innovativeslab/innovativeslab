## Stage 2: Public site

### What was implemented
Design system, layout and all public pages with original, non-fabricated copy.

### Files and features changed
- Layout, header, mobile navigation, footer, cookie-consent banner and consent-gated analytics
- Home, Services index and 10 service pages (data-driven), Industries, Process, Projects (labelled demo concepts), About, FAQ
- Privacy, Terms and Cookie pages (templates with a draft banner), sitemap, robots, JSON-LD
- Content in `src/content/en`

### Testing status
{{VERIFICATION}}

No layout, responsive, contrast or keyboard behaviour has been checked in a browser by the author.

### Known issues
- Bricolage Grotesque via `next/font/google` could not be checked against this Next.js version; swap the font in `src/app/layout.tsx` if the build rejects it.
- Legal pages contain bracketed placeholders and need lawyer review.

### Dependencies and configuration
- Depends on Stage 1 (merge first). Optional: `NEXT_PUBLIC_*` variables for contact/social links and GA.

### Review notes
- Do not squash-merge. Use **Create a merge commit** so later stage PRs show only their own changes.
- Merge in order: Stage 1, 2, 3, 4, 5. Each branch contains the earlier stages, so before earlier PRs are merged this PR's diff also shows them.
- Commit under review: `{{COMMIT}}`
