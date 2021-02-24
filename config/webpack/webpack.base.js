const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
})

module.exports = {
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: '[name].js',
  },
  entry: ['./src/index.js'],
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images',
          publicPath: 'assets',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
