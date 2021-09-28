const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV || 'development';

const plugins = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false
  }),
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "styles.css",
    chunkFilename: "[name]-[chunkhash].css"
  }),
];

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name]-[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  mode: env,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: plugins
}