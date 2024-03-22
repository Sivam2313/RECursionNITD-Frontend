/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#282828",
        outline: "#282828",
        heading: "#5E95D2",
        subHeading: "#B3B1AD",
        tertiaryText: "#EF6041",
        primary: "#3500D3",
        secondary: "#190061",
        onSurface: "#d7ECEF",
        secondaryText: "#BDE0FF99",
        onPrimary: "#002f68",
        codeSnippet: "#16181D",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      head: ["Oswald", "sans-serif"],
      sub: ["Montserrat", "serif"],
      alt: ["Lato", "sans-serif"],

    },
    dropShadow: {
      glow: ["0 0px 7px #C9AC57", "0 0px 5px #282828"],
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [],
};
