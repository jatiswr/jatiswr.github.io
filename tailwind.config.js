/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        raleway: ["Raleway"],
      },
      boxShadow: {
        neon: "0px 0px 17px 6px rgba(34, 211, 238, 1)",
        neon2: "0px 0px 6px 3px rgba(34, 211, 238, 1)",
      },
    },
  },
  plugins: [],
};
