const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
  devtool: 'source-map',
  entry: ['react-hot-loader/patch', path.join(__dirname, 'src', 'index.tsx')],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'minimal',
    overlay: true,
    port: 8080,
  },
}
