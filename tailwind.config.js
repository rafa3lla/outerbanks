/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      amber: colors.amber,
      pink: colors.pink,
      stone: colors.stone
    },
    fontFamily: {
      'poppins': 'Poppins',
    }
  },
  plugins: [],
}