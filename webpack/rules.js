const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rules = [
  {
    enforce: 'pre',
    loader: 'tslint-loader',
    test: /\.tsx?$/,
  },
  {
    exclude: /node_modules/,
    loaders: ['babel-loader', 'ts-loader'],
    test: /\.tsx?$/,
  },
  {
    test: /\.(sc|c)ss/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.(png|jpg)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'static/bookify/build/',
      },
    }],
  },
  { test: /\.(woff|woff2|eot|svg|ttf)$/, loader: 'file-loader' },
]

module.exports = rules
