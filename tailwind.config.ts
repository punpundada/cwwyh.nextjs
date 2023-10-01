import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",   // Example: Extra small
        sm: "640px",   // Example: Small
        md: "768px",   // Example: Medium
        lg: "1024px",  // Example: Large
        xl: "1280px",  // Example: Extra large
        '2xl': "1536px", // Example: 2x Extra large
      },
      colors: {
        app: {
          text: "#000000",
          background: "#fbfcfe",
          primary: "#7489d8",
          secondary: "#b3bfea",
          accent: "#2e47a3",
        },
        darkApp: {
          text: "#f2f7fd",
          background: "#08172b",
          primary: "#d99236",
          secondary: "#020509",
          accent: "#e8be87",
        },
      },
    },
  },
  plugins: [],
};
export default config;
