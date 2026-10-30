## Stage 1: Project foundation

### What was implemented
Project configuration, database schema and migration, core server libraries and CI.

### Files and features changed
- `package.json`, `tsconfig.json`, `next.config.mjs`, Tailwind/PostCSS config, `vitest.config.ts`
- `prisma/schema.prisma` and `prisma/migrations/0001_init`
- `src/lib`: site config, db client, request/IP hashing, consent-aware analytics helper, SEO metadata helper
- `.env.example`, `.gitignore`, `scripts/create-admin.mjs`, `.github/workflows/ci.yml`, README

### Testing status
{{VERIFICATION}}

This stage has no pages. A production build is skipped by CI at this stage by design.

### Known issues
- Migration SQL was hand-written from the schema; it has not been applied to a real database by the author.

### Dependencies and configuration
- Node >= 18.18, PostgreSQL. Env vars: see `.env.example`.

### Review notes
- Do not squash-merge. Use **Create a merge commit** so later stage PRs show only their own changes.
- Merge in order: Stage 1, 2, 3, 4, 5. Each branch contains the earlier stages, so before earlier PRs are merged this PR's diff also shows them.
- Commit under review: `{{COMMIT}}`
