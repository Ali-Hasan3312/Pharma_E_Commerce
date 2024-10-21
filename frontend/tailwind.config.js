/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#C9E4B9',
        'dark-green': '#7ACC0A',
        'custom-blue': '#008FE2',
        'custom-red': '#FF0505',
      },
    
    },
  },
  plugins: [],
}

