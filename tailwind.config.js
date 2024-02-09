/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        "background-shine": "background-shine 2s linear infinite",
        "background-shine-slow": "background-shine 4s linear infinite",
        "border-width": "border-width 3s infinite alternate",
      },
      keyframes: {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0",
            "width": "10px",
            "opacity": "0"
          },
          "to": {
            "backgroundPosition": "-200% 0",
            "width": "100px",
            "opacity": "1"
          }
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],

}