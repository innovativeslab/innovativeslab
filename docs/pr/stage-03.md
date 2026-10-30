## Stage 3: Lead capture

### What was implemented
Quote, consultation and contact forms with server-side validation, anti-spam, storage and email.

### Files and features changed
- `LeadForm` (accessible, field-level errors), `/api/leads` route
- Zod validation, honeypot, minimum-time check, database-backed rate limits, same-origin check, hashed IPs
- Lead storage in PostgreSQL, Resend notification (lead is kept if email fails)
- Pages: Request a Quote, Contact, Book a Consultation; validation unit tests

### Testing status
{{VERIFICATION}}

Form submission, database writes and email delivery have not been exercised end to end by the author.

### Known issues
- File attachments are intentionally not implemented.
- "Business email" is not enforced by blocking free-mail domains.

### Dependencies and configuration
- Depends on Stages 1 and 2. Requires `DATABASE_URL`, `AUTH_SECRET`; `RESEND_API_KEY`, `EMAIL_FROM`, `LEAD_NOTIFY_EMAIL` for notifications.

### Review notes
- Do not squash-merge. Use **Create a merge commit** so later stage PRs show only their own changes.
- Merge in order: Stage 1, 2, 3, 4, 5. Each branch contains the earlier stages, so before earlier PRs are merged this PR's diff also shows them.
- Commit under review: `{{COMMIT}}`
