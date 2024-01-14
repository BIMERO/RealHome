/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand_neutral: {
          100: "rgba(29, 29, 29, 0.6)",
          150: "#3F3F3F",
          200: "#444444",
          250: "#D6D6D6",
          300: "#ECE2F1",
          350: "#D6D6D6",
        },
        brand_primary: {
          100: "#F9F9FF",
          150: "#9500DB",
          200: "rgba(149, 0, 219, 0.3)",
          250: "rgba(149, 0, 219, 0.20)",
          300: "#8A3CAF",
        },
      },

      backgroundImage: {
        heroBg: "url('/public/images/bg.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
