export const processSteps = [
  { title: "Share your problem", body: "Tell us what is broken, what you want built or where you need support. Links, screenshots and error messages all help." },
  { title: "We review the requirements", body: "An engineer reads what you sent, and may ask to see the code or the live app, so we understand the situation before we propose anything." },
  { title: "You receive a proposed scope and quote", body: "You get a written scope, deliverables, timeline estimate and price. For rescue projects, an assessment comes first so the quote reflects what is really there." },
  { title: "We implement the agreed solution", body: "Work happens in your repository or an agreed environment, with progress updates in plain language." },
  { title: "We test and validate the work", body: "We check the changes against the agreed scope, including the user journeys that matter to your business." },
  { title: "We hand over and provide agreed support", body: "You receive the deliverables and documentation, a walkthrough if needed, and the support period set out in the scope." },
];

export const problems = [
  { problem: "Your app works in preview but fails in production.", fix: "We compare environments, configuration and build output to find what differs, then fix the cause." },
  { problem: "Your authentication or database is broken.", fix: "We trace sign-in, sessions and data access end to end, correct the logic and secure it properly." },
  { problem: "Your website is slow or unreliable.", fix: "We measure first, then address the heaviest causes: assets, queries, scripts and hosting set-up." },
  { problem: "Your developer left the project unfinished.", fix: "We review what exists, document it, and complete the work or recommend what to rebuild." },
  { problem: "You need a reliable technical partner.", fix: "We offer clear scopes, direct communication and ongoing support you can plan around." },
];

export const trustPoints = [
  { title: "Human-led engineering", body: "Real engineers read your code, make the decisions and answer for the result." },
  { title: "Clear communication", body: "Plain-language updates, direct access to the people doing the work." },
  { title: "Practical problem-solving", body: "We fix what matters to your business before polishing what does not." },
  { title: "Transparent scope", body: "You know what is included, what is not and what it costs before work starts." },
  { title: "Quality-focused delivery", body: "Manual testing and review are part of the job, not an optional extra." },
  { title: "Worldwide remote collaboration", body: "We work with clients across time zones using email, video calls and shared repositories." },
];

export const whyUs = [
  { title: "Human expertise", body: "People assess the problem, make the technical decisions and test the outcome." },
  { title: "Direct communication", body: "You talk to the people doing the work, not a layer of account managers." },
  { title: "Understandable pricing", body: "Written scopes and quotes that explain what you are paying for." },
  { title: "Maintainable solutions", body: "Readable, documented code that another developer can continue." },
  { title: "Testing built in", body: "Every delivery is checked against the agreed scope before handover." },
  { title: "Clear deliverables", body: "You always know what you will receive and when." },
];

export const industries = [
  { title: "Startups and founders", body: "First releases, prototypes that need hardening and technical help without a full-time hire." },
  { title: "SaaS and product teams", body: "Extra engineering capacity, bug backlogs, integrations and quality assurance." },
  { title: "Small and medium businesses", body: "Websites, booking systems, internal tools and dependable ongoing support." },
  { title: "Agencies", body: "White-label development and troubleshooting support behind your own client relationships." },
  { title: "E-commerce and retail", body: "Store builds, checkout and payment problems, performance and order integrations." },
  { title: "Professional services", body: "Client portals, scheduling, document workflows and credible business websites." },
  { title: "Education and membership organisations", body: "Membership platforms, portals and content-driven sites." },
  { title: "Established companies", body: "Legacy fixes, handovers of existing code and independent technical reviews." },
];

export const faqs = [
  { q: "Can you fix a project built with Lovable, Bolt, Replit, Cursor or similar tools?", a: "Often, yes, but we do not promise it before looking. We start with an assessment of the code, environment and goals. Then we tell you whether the project can be repaired, needs partial rebuilding, or is not worth continuing." },
  { q: "Can you work with an existing codebase?", a: "Yes. We regularly review, fix and extend code written by others. We start by reading it and documenting what we find, so changes are made with context." },
  { q: "Do you work with clients in other countries?", a: "Yes. Innovations Labs works remotely with clients worldwide. We agree on communication channels and overlap hours at the start of each project." },
  { q: "How is a project priced?", a: "After we understand the problem, you receive a written scope and quote. Depending on the work, that can be a fixed price for a defined scope or an estimate for exploratory work. We do not publish prices that cannot reflect your actual needs." },
  { q: "How long will it take?", a: "It depends on what is involved. A focused bug fix can be quick; a custom application takes longer. You get a timeline estimate with your proposal, and we tell you early if something changes." },
  { q: "Is my project kept confidential?", a: "We treat client information as confidential and can sign a non-disclosure agreement on request. We only use your data to deliver the agreed work." },
  { q: "Who owns the deliverables?", a: "Ownership terms are set out in the written agreement for each project. The intention is that you own the work you pay for, and the details are confirmed in writing before work begins." },
  { q: "What happens after delivery?", a: "Your scope includes handover documentation and an agreed support period. If you want continuing updates, monitoring or support, we offer maintenance arrangements." },
];

export const demoProjects = [
  {
    title: "Appointment booking portal",
    stack: "Next.js, TypeScript, PostgreSQL",
    problem: "A service business takes bookings by phone and message, and loses track of them.",
    approach: "A customer-facing booking page with a staff dashboard, availability rules and email confirmations.",
    shows: "How we scope a web application, model the data and plan testing.",
  },
  {
    title: "Rescue of a prototype that fails after deploy",
    stack: "React, hosted backend, third-party auth",
    problem: "A generated prototype works in preview but sign-in fails once deployed.",
    approach: "Compare environments, trace the authentication flow, correct configuration and add basic tests.",
    shows: "How a rescue assessment moves from symptom to cause to fix.",
  },
  {
    title: "Store checkout repair",
    stack: "Online store, payment provider, webhooks",
    problem: "Customers reach payment but some orders never register.",
    approach: "Reproduce the journey, inspect webhook handling and order creation, fix and retest end to end.",
    shows: "How we investigate and verify a revenue-critical bug.",
  },
];
