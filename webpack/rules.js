const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const rules = [
  {
    test: /\.tsx?$/,
    enforce: 'pre',
    loader: 'tslint-loader',
  },
  { test: /\.tsx?$/, loader: 'ts-loader' },
  {
    test: /\.(sc|c)ss/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
  },
  { test: /\.(png|jpg)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'static/bookify/build/'
      },
    }]
  },
  { test: /\.(woff|woff2|eot|svg|ttf)$/, loader: 'file-loader' },
]

module.exports = rules
