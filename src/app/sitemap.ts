import type { MetadataRoute } from "next";
import { services } from "@/content/en/services";
import { site } from "@/lib/site";

const pages = ["", "/services", "/industries", "/process", "/projects", "/about", "/contact", "/request-quote", "/book-consultation", "/faq", "/privacy-policy", "/terms-of-service", "/cookie-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: s.slug === "vibe-coded-project-rescue" ? 0.9 : 0.8 })),
  ];
}
