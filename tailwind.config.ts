import type { Config } from "tailwindcss";

/**
 * Innovations Labs light brand system.
 * Contrast (WCAG, computed): fg on page 17.7:1, muted on page 5.9:1 / on soft 5.6:1,
 * brand on page 5.2:1, white on brand 5.2:1, edge (form borders) on page 3.2:1.
 * `cyan` is decorative only (gradients), never used for text.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#FFFFFF",
        soft: "#F6F8FC",
        card: "#FFFFFF",
        line: "#E5E7EB",
        edge: "#8392A5",
        fg: "#111827",
        muted: "#56657A",
        brand: "#2563EB",
        "brand-hover": "#1D4ED8",
        "brand-deep": "#1E3A8A",
        link: "#2563EB",
        cyan: "#38BDF8",
        ok: "#15803D",
        warn: "#92400E",
        bad: "#B91C1C",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,24,39,0.04), 0 6px 20px -10px rgba(17,24,39,0.10)",
        lift: "0 2px 4px rgba(17,24,39,0.05), 0 18px 40px -16px rgba(37,99,235,0.28)",
      },
    },
  },
  plugins: [],
};
export default config;
