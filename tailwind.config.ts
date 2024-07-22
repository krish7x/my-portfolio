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
      spacing: {
        "1rem": "1rem",
        "7px": "7px",
        "10px": "10px",
      },
      borderRadius: {
        "30%": "30%",
      },
      colors: {
        custom1: "#322C2B",
        custom2: "#00B7C7",
        custom3: "#94A3BB",
        custom4: "#E7E9EA",
        custom5: "#E5E5F9",
        custom6: "#67748b",
        custom7: "#f3f2ff",
        custom8: "#EB5757",
        custom9: "#87837826",
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
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".underlined": {
          position: "relative",
          display: "inline-block",
        },
        ".underlined::after": {
          content: '""',
          position: "absolute",
          bottom: "-10px",
          left: "0",
          height: "7px",
          width: "100%",
          borderBottom: "2px solid #2563eb",
          borderRadius: "30%",
        },
        ".subunderlined": {
          position: "relative",
          display: "inline-block",
        },
        ".subunderlined::after": {
          content: '""',
          position: "absolute",
          bottom: "-10px",
          left: "0",
          height: "7px",
          width: "100%",
          borderBottom: "2px solid #00B7C7",
          borderRadius: "30%",
        },
      });
    },
    nextui(),
    require("@tailwindcss/typography"),
  ],
};
