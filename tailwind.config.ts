import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Italianno: ["Italianno", "sans-serif"],
      },
    },
    colors: {
      bgHeroColor: "rgba(0, 0, 0, 0.2)",
      white: "#ffffff",
      black: "#000000",
      mainYellow: "rgb(252, 172, 69)",
      addBgColor: "#EDEDED",
    },
  },
  plugins: [],
};
export default config;
