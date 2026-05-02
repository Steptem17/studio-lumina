import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",      // warm off-white
        surface: "#F5F4F0",          // subtle gray surface
        border: "#E2E0DB",           // refined borders
        text: {
          primary: "#1C1C1C",       // deep charcoal
          secondary: "#555555",
          muted: "#8A8A8A",
        },
        accent: {
          DEFAULT: "#3B3F4A",       // elegant graphite/slate
          warm: "#B8A99A",          // subtle warm accent (beige/bronze)
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"], // optional editorial serif
      },
      spacing: {
        "section": "7rem",           // consistent vertical rhythm
        "section-sm": "4rem",
      },
      maxWidth: {
        "container": "1280px",       // main content width
      },
    },
  },
  plugins: [],
};
export default config;