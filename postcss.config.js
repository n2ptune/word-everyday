const tailwindcss = require('tailwindcss')('tailwind.config.js')
const cssnano = require('cssnano')({ preset: 'default' })
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.vue', './src/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ]
})

module.exports = {
  plugins: [tailwindcss, autoprefixer, cssnano, purgecss]
}
