import type { Metadata } from "next";
import { site } from "./site";

export function buildMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const url = `${site.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en",
    },
    twitter: { card: "summary_large_image", title: `${opts.title} | ${site.name}`, description: opts.description },
  };
}
