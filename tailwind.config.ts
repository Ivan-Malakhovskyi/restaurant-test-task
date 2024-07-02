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
      accentBgColor: "rgba(0, 0, 0, 0.3)",
      mainGrey: "#747474",
    },
    boxShadow: {
      baseShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
      inputShadow: "inset 0px 1px 4px 0px rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};
export default config;
