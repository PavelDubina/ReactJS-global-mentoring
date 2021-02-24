const merge = require('webpack-merge')
const TercerWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.js')
const path = require('path')
const htmlPlugin = new HtmlWebPackPlugin({
  template: 'src/index.html',
  inject: 'body',
  filename: 'index.html',
})

module.exports = merge(base, {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), htmlPlugin],
  optimization: {
    minimizer: [new TercerWebpackPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
})
