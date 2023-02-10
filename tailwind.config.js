/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
