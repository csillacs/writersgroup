module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./src/**/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
