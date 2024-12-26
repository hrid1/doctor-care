/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00856f",
        "green-light": "#dce9e2 ",
        "green-light-2": "#f7f9f9",
        "brand-beige": "#fffaf1",
        "brand-green-hover": "#00453a",
      },
      fontFamily: {
        "primary": ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
