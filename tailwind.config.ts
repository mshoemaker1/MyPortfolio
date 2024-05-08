import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          300: "#E9E1D5",
          500: "#D3C3AC",
        },
        green: {
          300: "#BECBB3",
          500: "#7D9968",
        },
        lavender: {
          300: "#CDCCE0",
          500: "#9C9AC1",
        },
        bronze: {
          300: "#DDC3A2",
          500: "#BA8745",
        },
        neutral: {
          350: "#AAAAAA",
          550: "#545454",
        },
      }
    }
  },
  plugins: [],
};
export default config;
