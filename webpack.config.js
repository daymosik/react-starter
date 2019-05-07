const path = require('path')
const config = require('./webpack/config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/ts/app.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `[name].[chunkhash].js`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.join(__dirname, 'src/ts/app.tsx'),
      '@components': path.join(__dirname, 'src/ts/components'),
      '@i18n': path.join(__dirname, 'src/ts/i18n'),
      '@modules': path.join(__dirname, 'src/ts/modules'),
      '@slices': path.join(__dirname, 'src/ts/slices'),
      '@store': path.join(__dirname, 'src/ts/store'),
      '@utils': path.join(__dirname, 'src/ts/utils'),
      '@assets': path.join(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: config.rules,
  },
  plugins: config.plugins,
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        // cache: true,
        // parallel: true,
        // sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
}
