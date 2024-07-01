module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'tailwindcss/nesting': {},  // Ensure this line is before Tailwind CSS
    tailwindcss: {},
    autoprefixer: {},
  },
}
