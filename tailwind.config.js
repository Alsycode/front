/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Chakra Petch"', "sans-serif"],
        aldrich: ['"Aldrich"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

