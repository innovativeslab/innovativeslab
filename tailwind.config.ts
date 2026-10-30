import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        panel: "#121A2B",
        raised: "#18223A",
        line: "#26324A",
        fg: "#E8ECF4",
        muted: "#9FAAC0",
        brand: "#3A63E8",
        "brand-hover": "#2F55D1",
        link: "#8FA8FF",
        violet: "#8B6CFF",
        ok: "#5BD6A0",
        warn: "#F2C265",
        bad: "#FF8A8A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
