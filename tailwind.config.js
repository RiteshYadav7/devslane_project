module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./img/hero.webp')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
