# What is needed from the business owner
- Decide hosting, database and email providers and create the accounts (nothing was purchased).
- Final domain name and DNS access.
- A real business email address (set `NEXT_PUBLIC_CONTACT_EMAIL`, `LEAD_NOTIFY_EMAIL`).
- Real profile links if wanted (LinkedIn/GitHub env vars). Nothing is displayed if empty.
- Legal entity name, registered address, jurisdiction, data retention period; have a lawyer review Privacy, Terms and Cookie pages, then set `NEXT_PUBLIC_LEGAL_REVIEWED=true`.
- Team profiles and verified case studies or testimonials, with written permission. Until then the site shows clearly labelled demo concepts and no team section.
- Confirm the service list matches what you can genuinely deliver (edit `src/content/en/services.ts`).
- Decide on file attachments (not implemented, see STATUS) and booking calendar (optional).
- Choose the admin email/password for the first admin user.
