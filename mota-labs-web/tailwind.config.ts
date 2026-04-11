import type { Config } from "tailwindcss";

/** UI stack — headlines / hero (native SF on Apple, sensible fallbacks). */
const fontDisplay = ['"SF Pro"', "-apple-system", "BlinkMacSystemFont", "sans-serif"] as const;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F3797A",
        "on-primary": "#224225",
        background: "#172b19",
        surface: "#224225",
        "primary-container": "#F3797A",
        "on-surface": "#F3797A",
        "surface-variant": "#F3797A",
        outline: "#F3797A"
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px"
      },
      fontFamily: {
        /** Display / hero / section titles (site default for “loud” type). */
        display: [...fontDisplay],
        /** Legacy — Space Grotesk; use `font-display` for new UI. */
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        "sf-pro": [...fontDisplay],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
        meta: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      /**
       * Minimal type scale — sizes ship with line-height (+ letter-spacing where fixed).
       * Pair with font-display / font-body / font-label / font-meta.
       */
      fontSize: {
        display: ["2.5rem", { lineHeight: "1.1", letterSpacing: "0" }],
        "display-sm": ["3rem", { lineHeight: "1.1", letterSpacing: "0" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "0" }],
        section: ["1.25rem", { lineHeight: "1.1", letterSpacing: "0" }],
        body: ["0.875rem", { lineHeight: "1.625" }],
        "body-lg": ["1rem", { lineHeight: "1.625" }],
        label: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        caption: ["0.625rem", { lineHeight: "1.375", letterSpacing: "0.1em" }],
        meta: ["0.625rem", { lineHeight: "1.25", letterSpacing: "0.1em" }],
      },
    },
  },
  plugins: [],
};
export default config;
