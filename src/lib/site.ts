export const site = {
  name: "Innovations Labs",
  tagline: "Real Experts. Practical Solutions. Software That Works.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  // Contact details are shown ONLY when configured. Nothing is invented.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  socials: [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "" },
    { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL || "" },
  ].filter((s) => s.href),
  legalReviewed: process.env.NEXT_PUBLIC_LEGAL_REVIEWED === "true",
  locale: "en",
};
