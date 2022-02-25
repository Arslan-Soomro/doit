const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        pf: ["Poppins", "sans-serif"],
      },
      colors: {
        pclr: {
          100: "#7795e8",
          200: "#6183e4",
          300: "#4a71e0",
          400: "#3460dc",
          500: "#1D4ED8", //Main
          600: "#1a46c2",
          700: "#173ead",
          800: "#143797",
          900: "#112f82",
        },
        sclr: {
          100: "#d8749e",
          200: "#d25d8e",
          300: "#cb467d",
          400: "#c52f6d",
          500: "#BE185D", //Main
          600: "#ab1654",
          700: "#98134a",
          800: "#851141",
          900: "#720e38",
        },
        nclr: colors.neutral,
      },
      screens: {
        //That shorthand version of adding a small breakpoint produces an error

        xs: "475px",
        // => @media (min-width: 475px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
