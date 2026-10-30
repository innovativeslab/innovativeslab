## Stage 5: Documentation and deployment notes

### What was implemented
Setup, deployment, cost and status documentation, plus Vercel readiness checklist and PR descriptions.

### Files and features changed
- `docs/DEPLOYMENT.md`, `docs/VERCEL_CHECKLIST.md`, `docs/SERVICES_AND_COSTS.md`, `docs/TODO_OWNER.md`, `docs/STATUS.md`, `docs/pr/*`

### Testing status
{{VERIFICATION}}

Documentation only.

### Known issues
- See `docs/STATUS.md` for remaining gaps.

### Dependencies and configuration
- Depends on Stages 1 to 4.

### Review notes
- Do not squash-merge. Use **Create a merge commit** so later stage PRs show only their own changes.
- Merge in order: Stage 1, 2, 3, 4, 5. Each branch contains the earlier stages, so before earlier PRs are merged this PR's diff also shows them.
- Commit under review: `{{COMMIT}}`
