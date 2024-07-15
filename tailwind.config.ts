import { nextui } from "@nextui-org/react";
import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      writingMode: {
        vertical: "vertical-rl",
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        "0.25s": "250ms",
      },
      colors: {
        white: "#FFF",
        green: {
          50: "#848D97",
        },
        darkBlue: {
          50: "#1C172E",
        },
        custom1: "#322C2B",
        custom2: "#00B7C7",
        custom3: "#94A3B8",
        custom4: "#E7E9EA",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
        ".vertical-ttb": {
          writingMode: "vertical-tb",
        },
        ".vertical-btt": {
          writingMode: "vertical-bt",
        },
      };
      addUtilities(newUtilities);
    },
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
    nextui(),
    require("@tailwindcss/typography"),
  ],
};
