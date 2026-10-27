import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { accent: { DEFAULT: "#0E7C66", dark: "#34D3A7" } }, fontFamily: { sans: ["Inter", "system-ui", "sans-serif"], display: ["Fraunces", "Georgia", "serif"] } } },
} satisfies Config;
