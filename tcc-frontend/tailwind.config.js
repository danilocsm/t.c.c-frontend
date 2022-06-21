/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      cerBlue: "#7187F5",
      cerPurple: "#B388EB",
      cerGreen: "#6BDAAA",
      navBarFontColor1: "#1E2564",
      ...colors,
    },
    extend: {
      fontFamily: {
        grandstander: ["grandstander",],
      },
      opacity: {
        'cerBgOpacity': '0.19',
      }
    },
  },
  plugins: [],
};
