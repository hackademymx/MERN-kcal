const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtraPlugin = require('mini-css-extract-plugin')
const BundleAnalizerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new BundleAnalizerPlugin(),
    new Dotenv({
      path: './.env.development'
    })
  ]
})