const path = require('path')
const cssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new cssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('@@', path.resolve(__dirname, './'))
  }
}
