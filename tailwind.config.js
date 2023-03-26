/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "dark-blue": "#29235C",
        blue: "#394CC4",
        "light-blue": {
          100: "#5F6BE4",
          200: "#5763d3"
        },
        "green-1": "#1CA6D0",
        "green-2": "#16C39A",
        yellow: {
          100: "#FFB400",
          200: "#eba809"
        },
        orange: "#FF6A29",
        red: {
          100: "#CA005D",
          200: "#b80357"
        },
        white: "#FFFFFF",
        gray: "#e9e9e9",
        black: "#000000"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        headings: ["Sora", "sans-serif"]
      },
      aspectRatio: {
        "70/30": "70 / 30",
        square: "1 / 1"
      }
    }
  },
  plugins: []
};
