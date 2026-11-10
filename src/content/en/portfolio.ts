/**
 * Portfolio data. To add a project: append an object here. It appears on the homepage
 * preview, /projects, its own /projects/<slug> page and the sitemap automatically.
 *
 * Rules: descriptions are written in our own words from each product's public positioning.
 * No statistics, testimonials or technical claims are invented. `url` must be a real, verified
 * link or left undefined. `image` is for real screenshots placed under /public/portfolio
 * once permission to show them exists; until then an original illustration is rendered.
 * `role` (what Innovations Labs did on the project) is shown only when provided.
 */
export type ProjectVisualKind = "funnel" | "registry" | "relationship" | "delivery";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  capabilities: string[];
  url?: string;
  visual: ProjectVisualKind;
  image?: { src: string; alt: string; width: number; height: number };
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "funnelbeam",
    title: "FunnelBeam",
    category: "Sales intelligence platform",
    summary: "A sales intelligence platform that brings CRM automation, lead enrichment, data intelligence and workflow automation together for go-to-market teams.",
    description: "FunnelBeam is a sales intelligence platform for revenue teams. It focuses on keeping CRM records complete and current, enriching leads and accounts with additional data, and automating the routine workflows that surround them.",
    capabilities: ["CRM automation", "Lead enrichment", "Data intelligence", "Workflow automation"],
    url: "https://www.funnelbeam.com/",
    visual: "funnel",
  },
  {
    slug: "tuneregistry",
    title: "TuneRegistry",
    category: "Music publishing administration",
    summary: "A music publishing administration platform for managing catalogs, metadata, rights registrations and royalty administration in one place.",
    description: "TuneRegistry is a music publishing administration platform. It gives songwriters, artists and publishers a central place to manage their catalog and metadata, register their rights, and administer royalties.",
    capabilities: ["Music catalog management", "Metadata management", "Rights registration", "Royalty administration"],
    url: "https://www.tuneregistry.com/",
    visual: "registry",
  },
  {
    slug: "ment",
    title: "MENT (Getment)",
    category: "Relationship intelligence",
    summary: "An AI-powered relationship intelligence platform that surfaces relationship insights, contact intelligence and smart follow-up prompts.",
    description: "MENT is an AI-powered relationship intelligence platform. It helps people and organisations understand their relationships through contact intelligence and insights, and supports timely, purposeful follow-up.",
    capabilities: ["Relationship insights", "Contact intelligence", "Smart follow-up"],
    url: "https://getment.io/",
    visual: "relationship",
  },
  {
    slug: "cheetay-food-delivery",
    title: "Cheetay Food Delivery",
    category: "Food delivery and online ordering",
    summary: "A food delivery and online ordering platform covering menu browsing and ordering, delivery, and the customer experience around them.",
    description: "Cheetay Food Delivery is a food delivery and online ordering platform. It connects customers with restaurants for ordering and delivery, with attention to a smooth customer experience from browsing to doorstep.",
    capabilities: ["Online food ordering", "Delivery", "Customer experience"],
    // url intentionally omitted: no verified project URL is available in the repository.
    visual: "delivery",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
