/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        modak: ["Modak", "cursive"],
        fira: ["Fira Sans", "cursive"],
        friends: ["Gloria Hallelujah", "cursive"],
      },
      backgroundImage: {
        badSignal: "url('/public/assets/tv-bg.jpg')",
      },
      animation: {
        go: "run 5s linear infinite",
      },
      boxShadow: {
        hg: "20px 38px 34px -26px hsla(0,0%,0%,.2)",
      },
      borderRadius: {
        hg: "255px 15px 225px 15px/15px 225px 15px 255px",
      },
      animation: {
        "marquee-slower": "marquee 30s linear infinite",
        // marquee: "marquee 27s linear infinite",
        // "marquee-faster": "marquee 15s linear infinite",
        // "scroll-slower": "scroll 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-250%)" },
          "100%": { transform: "translateX(250%)" },
          // "0%": { transform: "translateY(60%)" },
          // "500%": { transform: "translateY(100%)" },
        },
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
    variants: {
      lineClamp: ["responsive", "hover"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
