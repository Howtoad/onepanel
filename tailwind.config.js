const { getQueriesForElement } = require('@testing-library/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        opGray: "#B7B7B7",
        opGreen: "#19BC3D",
        opGrayBg: "#D9D9D9",
        opRed: "#DA0000",
        opSalmon: "#FB8383",

      },
    },
  },
  plugins: [],
};