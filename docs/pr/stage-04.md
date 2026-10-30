## Stage 4: Admin dashboard

### What was implemented
Staff sign-in and lead management.

### Files and features changed
- Login with bcrypt-hashed passwords and login rate limiting; signed httpOnly session cookie; middleware plus per-page and per-action authorization
- Lead list with search, status/type filters, pagination; lead detail with status updates, internal notes and permanent deletion
- CSV export with spreadsheet-formula injection protection

### Testing status
{{VERIFICATION}}

Authentication flow and permissions have not been exercised against a running database by the author.

### Known issues
- Stateless JWT sessions (8 h), no revocation, single role.

### Dependencies and configuration
- Depends on Stage 3. Requires `AUTH_SECRET` and an admin user created with `npm run admin:create`.

### Review notes
- Do not squash-merge. Use **Create a merge commit** so later stage PRs show only their own changes.
- Merge in order: Stage 1, 2, 3, 4, 5. Each branch contains the earlier stages, so before earlier PRs are merged this PR's diff also shows them.
- Commit under review: `{{COMMIT}}`
