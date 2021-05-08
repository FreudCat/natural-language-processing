- Entire into command line to install node: npm init and go through creation steps in cli and see package.json created
- Entire into command line to install express: npm install express (node_modules folder should show up now)
- Create src folder and inside a client and server folder 
- In server folder, create file name server.js and start up a server (see weather app for example)
- open terminal in VSCode and navigate to the server folder. Type "node server.js" to check of server is running
- Add node_modules folder to .gitignore BEFORE staging the folders 
- type "npm install --save-dev nodemon" in terminal to install nodemon
- go to package.json and add 
"scripts": {
    "dev": "nodemon ./src/server/server.js localhost 2000" (note that the path after nodemon depends on where the server is in relation to package.json)
  },
- use npm run dev to start the nodemon server
- Add js, styles, and views folders and create index.html in views folder 
- create index.js in the client folder
- install webpack via command line: npm i webpack webpack-cli 
- in package json add "build": "webpack" to scripts
- add "webpack-dev-server": "^3.11.0" to devdependencies in package.json
- add a file webpack.config.js in the root folder
- add const path = require("path")
const webpack = require("webpack")
module.exports = {
} to the webpack.config.js folder
- add entry: './src/client/index.js' within the module.exports in the webpack.config.js
- type npm run build and see that a dist folder has been created 
- go to server.js in server folder and type app.use(express.static("dist")); to provide an entry point 
- go to index.html in views and add the path to the main.js file in the dist folder like you would for any js file (won't need any other ref files since everything will be in the dist folder - we will also get rid this main.js connection in a little bit )
- install babel in command line npm i -D @babel/core @babel/preset-env babel-loader (See if there's a later verions) 
- create a file called .babelrc in the root of the project and type { ‘presets’: ['@babel/preset-env'] }   ---> we need babel to import js into other js files on the client side
- now connect webpack to babel, go to webpack.config.js and add 
       module: {
            rules: [
                    {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
                    }
            ]
    }   underneath "entry" 

- each time you add something, delete the dist folder and use npm run build to recreate the new dist folder with your new assets, etc 
- install html webpack plugin: npm i -D html-webpack-plugin
- require plugin at top of webpack config: const htmlWebpackPlugin = require("html-webpack-plugin")
- add 
plugins: [
      new htmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
      })
  ]   after the entire modules curly braces
- delete the script in the views -> index.html 
- delete dist folder and type npm run build, check that dist folder now has main.js and index.html and that index.html has the script tab w/ the main.js
- start the server and go to browser (localhost:portnumber) to make sure the html displayed
- go to server -> index.js and add: app.get("/", function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
}); and then add const path = require('path') to the top
- add mode: "production", to webpack.config in the modules.export
- change webpack.conf file to webpack.prod.js (the one with the mode:production)
- add webpack.dev.js in the root folder and copy everything from the .prod.js folder into this file
- add the following to the module.exports in dev.js: mode: "development", 
  devtool: "source-map" and delete mode: production
- go to package.json and remove the build: line, instead add "build-prod": "webpack --config webpack.prod.js", "build-dev": "webpack serve  --config webpack.dev.js --open"
- from now on use npm run build-prod to create the dist folder
- add "start": "node src/server/server.js", to package.json so that you can run npm start to start the server in terminal
- run npm i -D webpack-dev-server to install dev server that will hot reload
- now replace the build-dev in package.json with:"webpack serve  --config webpack.dev.js --open"