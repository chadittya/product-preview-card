const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      md: "720px",
      lg: "1280px",
      desktop: "1440px",
    },

    extend: {
      colors: {
        bgDarkCyan: "hsl(158, 36%, 37%)",
        bgCream: "hsl(30, 38%, 92%)",
        bgVeryDarkBlue: "hsl(212, 21%, 14%)",
        bgDarkGrayishBlue: "hsl(228, 12%, 48%)",
        bgWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        Fraunces: ['"Fraunces"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
