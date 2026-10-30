# Deployment (suggested: Vercel + Neon, both have free tiers)

1. Push this repo to GitHub (do not commit `.env`).
2. Create a Postgres database (Neon or Supabase free tier). Copy the pooled connection string into `DATABASE_URL`.
3. Create the Vercel project from the repo. Add every variable from `.env.example` under Project Settings > Environment Variables. Generate `AUTH_SECRET` with `openssl rand -base64 48`.
4. Run migrations against the production database once: `DATABASE_URL="..." npx prisma migrate deploy`.
5. Create the admin user once: `DATABASE_URL="..." ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run admin:create`.
6. Email: create a Resend account, verify your sending domain (DNS records), set `RESEND_API_KEY`, `EMAIL_FROM`, `LEAD_NOTIFY_EMAIL`.
7. Domain: add the domain in Vercel, then set the DNS records Vercel shows at your registrar. Set `NEXT_PUBLIC_SITE_URL` to the final https URL and redeploy.
8. Search Console: add the property, verify via DNS, submit `/sitemap.xml`.
9. Verify after deploy: submit a test quote, confirm it appears in /admin and that the email arrives, sign in/out, check `/robots.txt` and `/sitemap.xml`.
