/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      stone: colors.stone,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      red: colors.red,
      amber: colors.amber,
      blue: colors.blue,
    },
  },
  plugins: [],
}
