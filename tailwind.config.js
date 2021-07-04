module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./src/**/*.css",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          20: "#e5e5e5",
          750: "#2f353e",
          850: "#262c33",
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
