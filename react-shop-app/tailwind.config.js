const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        red: colors.rose,
      },
    },
  },
  darkMode: "media", // or false or 'class',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  plugins: [],
};
