const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const styleLoader = require("style-loader")
const sassLoader = require("sass-loader")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: "production", //informs which mode we are in 
  entry: './src/client/index.js',  //custom entry point webpack 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'var',
    library: 'Client'
},
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      }, 
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
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
      },
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
      }), 
      new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
    }), 
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}