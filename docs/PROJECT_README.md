# Innovations Labs website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + PostgreSQL (Prisma). Public marketing site, quote / consultation / contact forms that save to the database, email notification, and a protected lead-management dashboard.

> Read `docs/STATUS.md` first: it states exactly what has and has not been verified.

## Local setup
```bash
npm install
cp .env.example .env            # fill in DATABASE_URL and AUTH_SECRET at minimum
npx prisma migrate dev --name init   # creates tables (first run generates prisma/migrations)
ADMIN_EMAIL=you@company.com ADMIN_PASSWORD='a-long-passphrase' npm run admin:create
npm run dev                      # http://localhost:3000, admin at /admin
npm run typecheck && npm test && npm run build
```
Commit the generated `prisma/migrations` folder. In production run `npm run db:migrate` (prisma migrate deploy).

## Structure
- `src/app` routes (pages, `api/leads`, `admin`), `src/components` UI, `src/content/en` all page copy and service data, `src/lib` server logic (validation, auth, rate limit, email).
- Services are data-driven: add an entry to `src/content/en/services.ts` and its page, sitemap entry and form option appear automatically.
- Language support: copy lives in `src/content/en`; a future locale adds `src/content/<locale>` and a `[locale]` route segment.

## Adding the admin user / rotating access
Re-run `npm run admin:create` with a new password to reset it. Sessions are signed 8-hour cookies; changing `AUTH_SECRET` signs everyone out.
