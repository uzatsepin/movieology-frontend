/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "movie-black": "#1D2024",
        "movie-black-200": "#1F2326",
        "orange": "#F37515"
      }
    },
  },
  plugins: [],
}

