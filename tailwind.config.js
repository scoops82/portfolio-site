/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="night"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["bumblebee", "night"],
  },
};
