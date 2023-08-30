import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dl-accent": {
          400: "#633CFF",
          300: "#BEADFF",
          200: "#EFEBFF",
        },
        "dl-neutral": {
          600: "#333333",
          400: "#D9D9D9",
          300: "#737373",
          200: "#FAFAFA",
          100: "#FFFFFF",
        },
        "dl-danger": "#FF3939",
      },
      fontSize: {
        "heading-m": ["2rem", { fontWeight: 700, lineHeight: "3em" }],
        "heading-s": ["1rem", { fontWeight: 600, lineHeight: "1.5em" }],
        "body-m": ["1rem", { fontWeight: 400, lineHeight: "1.5em" }],
        "body-s": ["0.75rem", { fontWeight: 400, lineHeight: "1.5em" }],
      },
    },
  },
  plugins: [],
};
export default config;
