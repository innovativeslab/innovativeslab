/**
 * Portfolio data. To add a project: append an object to `projects`. It appears on /projects (with filters),
 * its own /projects/<slug> page and the sitemap automatically.
 *
 * Rules:
 *  - Descriptions are written in our own words from each product's public positioning. No statistics,
 *    testimonials or technical claims are invented. `technologies` lists only technologies that were stated.
 *  - `url` and `github` must be real, verified links, or left undefined (the card then links to its detail page).
 *  - `image` is for a real screenshot placed in /public/portfolio/ (we never hotlink third-party images);
 *    until one is provided an original illustration labelled "Illustration" is rendered.
 *  - `role` states what was actually done; it is shown on the detail page only when provided.
 *  - `featured: true` shows the project in the large featured card (use for one project only).
 */
export type ProjectGroup = "Sales & marketing" | "Commerce & marketplaces" | "Data & platforms";
export const projectGroups: ProjectGroup[] = ["Sales & marketing", "Commerce & marketplaces", "Data & platforms"];

export type ProjectVisualKind =
  | "funnel" | "registry" | "relationship" | "delivery"
  | "social" | "marketplace" | "identity" | "analytics";

export type Project = {
  slug: string;
  title: string;
  category: string;
  group: ProjectGroup;
  summary: string;
  description: string;
  capabilities: string[];
  technologies?: string[];
  url?: string;
  ctaLabel?: string;
  github?: string;
  featured?: boolean;
  status?: string;
  visual: ProjectVisualKind;
  image?: { src: string; alt: string; width: number; height: number };
  role?: string;
};

const END_TO_END = "Designed and developed end to end by Innovations Labs, from planning through delivery.";

export const projects: Project[] = [
  {
    slug: "socialnexify",
    title: "SocialNexify",
    category: "Social media publishing product",
    group: "Sales & marketing",
    featured: true,
    status: "Fully functional, ready for MVP launch",
    summary: "A product that turns a short brief into branded social posts and carousels in English, Urdu or Hindi, then schedules and publishes them to Facebook and Instagram.",
    description: "SocialNexify is a social media product for businesses that do not post in English only. You describe what to share in plain words; SocialNexify writes the caption, designs the post or carousel in your brand's colours and tone, and schedules and publishes it. Every post waits for your approval unless you switch on autopilot, and each publish is confirmed with the platform so nothing is posted twice. It is a fully functional product, ready for MVP launch, and is currently in a free beta. Facebook and Instagram publishing are available today; LinkedIn, video and voice are planned and not yet released.",
    capabilities: [
      "Posts and carousels from a short brief",
      "English, Urdu and Hindi, including right-to-left Urdu",
      "Brand kit: logo, colours and tone",
      "Campaigns and a content calendar",
      "Facebook and Instagram publishing",
      "Review and approval before publishing",
    ],
    url: "https://socialnexify.com/",
    ctaLabel: "View Live Product",
    visual: "social",
    role: "Product designed and developed by Qazi Ihsan Ahmad.",
  },
  {
    slug: "funnelbeam",
    title: "FunnelBeam",
    category: "Sales intelligence platform",
    group: "Sales & marketing",
    summary: "A sales intelligence platform that brings CRM automation, lead enrichment, data intelligence and workflow automation together for go-to-market teams.",
    description: "FunnelBeam is a sales intelligence platform for revenue teams. It focuses on keeping CRM records complete and current, enriching leads and accounts with additional data, and automating the routine workflows that surround them.",
    capabilities: ["CRM automation", "Lead enrichment", "Data intelligence", "Workflow automation"],
    url: "https://www.funnelbeam.com/",
    visual: "funnel",
    role: END_TO_END,
  },
  {
    slug: "tuneregistry",
    title: "TuneRegistry",
    category: "Music publishing administration",
    group: "Data & platforms",
    summary: "A music publishing administration platform for managing catalogs, metadata, rights registrations and royalty administration in one place.",
    description: "TuneRegistry is a music publishing administration platform. It gives songwriters, artists and publishers a central place to manage their catalog and metadata, register their rights, and administer royalties.",
    capabilities: ["Music catalog management", "Metadata management", "Rights registration", "Royalty administration"],
    url: "https://www.tuneregistry.com/",
    visual: "registry",
    role: END_TO_END,
  },
  {
    slug: "ment",
    title: "MENT (Getment)",
    category: "Relationship intelligence",
    group: "Sales & marketing",
    summary: "An AI-powered relationship intelligence platform that surfaces relationship insights, contact intelligence and smart follow-up prompts.",
    description: "MENT is an AI-powered relationship intelligence platform. It helps people and organisations understand their relationships through contact intelligence and insights, and supports timely, purposeful follow-up.",
    capabilities: ["Relationship insights", "Contact intelligence", "Smart follow-up"],
    url: "https://getment.io/",
    visual: "relationship",
    role: END_TO_END,
  },
  {
    slug: "cheetay-food-delivery",
    title: "Cheetay Food Delivery",
    category: "Food delivery and online ordering",
    group: "Commerce & marketplaces",
    summary: "A food delivery and online ordering platform covering menu browsing and ordering, delivery, and the customer experience around them.",
    description: "Cheetay Food Delivery is a food delivery and online ordering platform. It connects customers with restaurants for ordering and delivery, with attention to a smooth customer experience from browsing to doorstep.",
    capabilities: ["Online food ordering", "Delivery", "Customer experience"],
    // url intentionally omitted: no verified project URL is available.
    visual: "delivery",
    role: END_TO_END,
  },
  {
    slug: "loinix",
    title: "Loinix",
    category: "UK marketplace platform",
    group: "Commerce & marketplaces",
    summary: "A full-featured marketplace platform for the UK market with secure authentication, real-time messaging, Stripe Connect payments, wallet management and fraud prevention.",
    description: "Loinix is a marketplace platform built for the UK market. It combines secure account authentication with real-time messaging between users, payments through Stripe Connect, in-platform wallet management, and measures to prevent fraud.",
    capabilities: ["Secure JWT authentication", "Real-time messaging", "Stripe Connect payments", "Wallet management", "Fraud prevention"],
    technologies: ["Next.js", "Django", "PostgreSQL", "Stripe"],
    visual: "marketplace",
    role: "Developed by Qazi Ihsan Ahmad.",
  },
  {
    slug: "identixa",
    title: "Identixa",
    category: "Identity verification platform (KYC/KYB)",
    group: "Data & platforms",
    summary: "An enterprise identity verification platform that automates KYC and KYB checks using computer vision, OCR, face recognition and liveness detection.",
    description: "Identixa is an identity verification platform for KYC and KYB workflows. It automates the checks involved in verifying a person or business, using computer vision to read documents with OCR, match faces, and confirm liveness.",
    capabilities: ["KYC and KYB verification", "Document OCR", "Face recognition", "Liveness detection"],
    technologies: ["Django", "PyTorch", "OpenCV", "InsightFace"],
    visual: "identity",
    role: "Developed by Qazi Ihsan Ahmad.",
  },
  {
    slug: "pricify",
    title: "Pricify",
    category: "Pricing and market intelligence dashboard",
    group: "Data & platforms",
    summary: "An interactive pricing analytics platform with project management, volume, value and distribution charts, promotion and discount analysis, and heatmap visualisations.",
    description: "Pricify is a pricing and market intelligence dashboard. Teams organise their work in projects and explore pricing through interactive volume, value and distribution charts, analyse promotions and discounts, and read heatmap visualisations to support data-driven decisions.",
    capabilities: ["Project management", "Volume, value and distribution charts", "Promotion and discount analysis", "Heatmap visualisations"],
    visual: "analytics",
    role: "Developed by Qazi Ihsan Ahmad.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
