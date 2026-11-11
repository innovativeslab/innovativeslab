# What is needed from the business owner
- Decide hosting, database and email providers and create the accounts (nothing was purchased).
- Final domain name and DNS access.
- A real business email address (set `NEXT_PUBLIC_CONTACT_EMAIL`, `LEAD_NOTIFY_EMAIL`).
- Real profile links if wanted (LinkedIn/GitHub env vars). Nothing is displayed if empty.
- Legal entity name, registered address, jurisdiction, data retention period; have a lawyer review Privacy, Terms and Cookie pages, then set `NEXT_PUBLIC_LEGAL_REVIEWED=true`.
- Team profiles and verified testimonials, with written permission (none are shown).
- Portfolio: the owner confirmed all four projects were developed end to end by Innovations Labs; the `role` text states exactly that. Refine it per project in `src/content/en/portfolio.ts` if you want more detail (only add facts that are true).
- Portfolio visuals: cards currently show original illustrations labelled "Illustration". Add real screenshots only if you own them or have permission: put files in `public/portfolio/` and set `image` on the project.
- Cheetay Food Delivery: no verified URL exists in the repository, so it has a detail page but no external link. Provide the correct URL and set `url`.
- Confirm the service list matches what you can genuinely deliver (edit `src/content/en/services.ts`).
- Decide on file attachments (not implemented, see STATUS) and booking calendar (optional).
- Choose the admin email/password for the first admin user.

## Portfolio expansion (SocialNexify and CV projects)
- SocialNexify screenshot: no real screenshot could be captured or verified from the build environment, so its card shows an original illustration. Save a screenshot (for example `public/portfolio/socialnexify.webp`, about 1600x1000) and set `image: { src: "/portfolio/socialnexify.webp", alt: "...", width: 1600, height: 1000 }` on the project in `src/content/en/portfolio.ts`. Do the same for any other project.
- Branding check: SocialNexify's website footer links to "Nexora Studio" social accounts. Confirm that is the intended brand relationship before presenting it as an Innovations Labs portfolio piece.
- Loinix, Identixa and Pricify come from the personal CV, whose detail pages hide their live and GitHub links. Add `url` and `github` to each entry when you have verified links (the card shows them automatically). Confirm you are allowed to showcase them publicly: if any was built for an employer or client under confidentiality terms, get permission first.
- Not added (not a fit for this site's positioning, or no verifiable details): AI Voice Agent (BookKaru), Intelligent Chatbot, Clinical Consultations, Heart Disease Prediction. Each is one entry in `portfolio.ts` if you want it.
- CV figures such as percentage cost reductions and accuracy were deliberately NOT copied: they cannot be verified from here. Personal phone and email from the CV are not used anywhere.

