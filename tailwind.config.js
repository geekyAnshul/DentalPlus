/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '300px',
      md: '700px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}