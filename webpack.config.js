const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./dist/index.js",
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, "dest"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
    
  },
  resolve: {
    fallback: {
      
      "assert": false,
      "path": require.resolve('path-browserify'),
    } 
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dest"),
    },
    compress: false,
    port: 3000,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
