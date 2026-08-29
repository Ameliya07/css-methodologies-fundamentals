const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.js'],
      safelist: ['is-open'],
    }),
  ],
};
