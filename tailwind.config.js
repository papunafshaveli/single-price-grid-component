/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        karlaFont: ["Karla", "sans-serif"],
      },
      colors: {
        cyanFont: "hsl(179, 62%, 43%)",
        brightYellow: "hsl(71, 73%, 54%)",
      },
    },
  },
  plugins: [],
};
