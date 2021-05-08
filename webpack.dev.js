const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  devtool: 'source-map', //informs which mode we are in 
  entry: './src/client/index.js',  //custom entry point webpack 
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      }, 
      {
        test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ]
        }, 
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
      })
  ]
}