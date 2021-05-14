- Entire into command line to install node: npm init and go through creation steps in cli and see package.json created
- Entire into command line to install express: npm install express (node_modules folder should show up now)
- Create src folder and inside a client and server folder 
- In server folder, create file name server.js and start up a server (see weather app for example)
- open terminal in VSCode and navigate to the server folder. Type "node server.js" to check of server is running
- Add node_modules folder to .gitignore BEFORE staging the folders 
- type "npm install --save-dev nodemon" in terminal to install nodemon
"scripts": {
    "dev": "nodemon ./src/server/server.js localhost 2000" (note that the path after nodemon depends on where the server is in relation to package.json)
  },
- use npm run dev to start the nodemon server
- Add js, styles, and views folders and create index.html in views folder 
- create index.js in the client folder
- install webpack via command line: npm i webpack webpack-cli 
- create files `webpack.dev.js` and `webpack.prod.js` in root folder
- go to package.json and add `"prod": "webpack --config webpack.prod.js"` and `"dev": "webpack serve  --config webpack.dev.js --open"`
- in dev and prod files, add `const path = require("path");` `const webpack = require("webpack");`
`module.exports = {}` 
- add `entry: "./src/client/index.js"` within the module.exports in the webpack.prod.js
- type `npm run prod` in command line and see that a dist folder has been created 
- install babel in command line `npm i -D @babel/core @babel/preset-env babel-loader` (See if there's a later verions) 
- create a file called .babelrc in the root of the project and type `{ ‘presets’: ['@babel/preset-env'] }` 
- now connect webpack to babel, go to webpack.prod.js and add 
       module: {
            rules: [
                    {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
                    }
            ]
    }   underneath "entry" 
- in the dev folder, include: devServer: {
    port: 3000
  },    port need to be different than the port for the local server

- add "webpack-dev-server": "^3.11.0" to devdependencies in package.json
- go to server.js in server folder and type app.use(express.static("dist")); to provide an entry point 
- go to index.html in views and add the path to the main.js file in the dist folder like you would for any js file (won't need any other ref files since everything will be in the dist folder - we will also get rid this main.js connection in a little bit )

- See code on how to do a fetch request when there are two diff servers
- Add clean webpack - see section below
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
- in server, add app.use(express.urlencoded({ extended: true }));
app.use(express.json());  --> this takes the place of bodyparser middleware
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
- to run, type in terminal: npm start, then start another terminal and type npm run build-prod (be sure to delete the dist folder first), then type run npm build-dev


## Sass 
- npm install -g node-sass 
- in package.json, add: "sass": "node-sass -w src/ -o src/ --recursive",   to the scripts (change the src/ and src/ to the folder where you have the scss and want the css, respectively.) The -w means it will watch and auto-compile
- type node-sass -o css src/client/styles -w  (-o output to css, the folder containing the scss files, and -w means to continuously watch for changes); now the cmd line is watching for changes
- to use sass with webpack: npm install sass-loader sass webpack --save-dev
- add this to .build-dev and build-prod 
module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

# Style loader to connect CSS via webpack 
- npm install --save-dev style-loader
- npm install --save-dev css-loader
- add to both prod and dev module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
- in src->index.js add require("./styles/styles.css"); (css path)

## Clean Webpack 
_To clean up build folders upon rebuild_
- npm i -D clean-webpack-plugin
- const { CleanWebpackPlugin } = require('clean-webpack-plugin'); at top of prod.js
- For the plugin in prod.js underneath the entire modules section, add : 
- plugins [  
        new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        })
  ]
- then under "entry" in prod.js, add: output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'var',
    library: 'Client'
},
- every time npm run build-prod is run, should see a line stating that the dist/index.html etc was removed

## Bundle images to webpack 
- make sure html-webpack-plugin is npm installed 
- type npm i -D html-loader 
- in dev.js add: 
    {
        test: /\.html$/i,
        loader: 'html-loader',
      },
- type npm i -D file-loader
- Add to dev.js and prod.js: 
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
- now you can use ```img src=``` in html

## Installing Jest 
- npm i -D jest 
- add "test":"jest" into package.json under "scripts"
- create folder in root called __tests__ (double underscore on either side)
- create a file with the function or file name followed by .spec.js (ex - handleSubmit.spec.js)
- in spec.js, create test by writing: 
describe("name of fxn", () => {}); 
- within the {} above, type: 
test("what the fxn does", () => {//actual test}) 


## Incorporate CORS
- npm install cors
- add const cors = require("cors"); to top of server.js
- add app.use(cors()); to server.js

## Need to have node-fetch if using fetch on server
- npm install node-fetch
- const fetch = require('node-fetch'); at top of server.js
- now you can use async await in the node server

### To get the project running 
- npm start 
- npm run build-prod
- npm run build-dev 
- npm run sass