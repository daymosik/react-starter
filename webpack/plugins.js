const analize = false

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const plugins = [
  new webpack.ProvidePlugin({
    React: 'react',
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pl|en/),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[chunkhash].css",
    chunkFilename: "[name].[chunkhash].css"
  }),
]

if (analize) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = plugins
