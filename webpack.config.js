const path = require("path")
const webpack = require("webpack")
module.exports = {
  entry: './src/client/index.js',  //custom entry point webpack 
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}