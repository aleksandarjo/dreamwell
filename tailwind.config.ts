import { plugin } from "postcss";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        golos: ["Golos Text", "sans-serif"],
      },
      colors: {
        primary: "#19CF79",
        gray: "#636363",
        light: {
          gray: "#F5F5F5",
        },
        dark: {
          blue: "#152046",
        },
      },
      boxShadow: {
        main: "0 4px 20px 0 rgba(21, 32, 70, 0.07);",
        hover: "0 4px 60px 0 rgba(21, 32, 70, 0.15);",
        button: "0 4px 20px 0 rgba(25, 207, 121, 0.2);",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
} satisfies Config;
