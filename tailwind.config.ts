import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
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
