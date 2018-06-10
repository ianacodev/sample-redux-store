const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  entry: {
    app: './src/app.ts',
    style: './style.css',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
