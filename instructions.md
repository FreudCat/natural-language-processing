- Enter into command line to install node: npm init and go through creation steps in cli and see package.json created
- Enter into command line to install express: npm install express (node_modules folder should show up now)
- Create src folder and inside a client and server folder 
- In server folder, create file name server.js and start up a server (see weather app for example)
- add `const path = require('path')` to top of server.js
- Add node_modules folder to .gitignore BEFORE staging the folders 
- Add js, styles, and views folders and create index.html in views folder 
- create index.js in the client folder
- install webpack via command line: npm i webpack webpack-cli 

## Babel loader
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

## Add to local server
- go to server.js in server folder and type app.use(express.static("dist")); to provide an entry point 
- to to server.js and add: app.get("/", function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
  });   serves up the html to the browser 
- in server, add app.use(express.urlencoded({ extended: true }));
app.use(express.json());  --> this takes the place of bodyparser middleware
- See code on how to do a fetch request when there are two diff servers

- Add clean webpack - see section below

- delete the script in the views -> index.html 
- delete dist folder and type npm run build, check that dist folder now has main.js and index.html and that index.html has the script tab w/ the main.js
- start the server and go to browser (localhost:portnumber) to make sure the html displayed

- from now on use npm run prod to create the dist folder
- add "start": "node src/server/server.js", to package.json so that you can run npm start to start the server in terminal
- to run, type in terminal: npm start, then start another terminal and type npm run prod, then type run npm build-dev

## Set up production mode 
- create webpack.prod.js in root folder 
- add `"prod": "webpack --config webpack.prod.js"` to package.js scripts
- in prod.js, add `const path = require("path");` `const webpack = require("webpack");`
`module.exports = {}` 
- in module.exports, add `mode: "production"`
- add `entry: "./src/client/index.js"` within the module.exports in the webpack.prod.js
- type `npm run prod` in command line and see that a dist folder has been created 
- 

## Set up development mode
- create webpack.dev.js in root folder 
- - in dev.js file, add `const path = require("path");` `const webpack = require("webpack");`
`module.exports = {}` 
- in module.exports, add `mode: "development"`and `devtool: "source-map"` 
- in module.exports, add: entry: './src/client/index.js',  
  output: {
    clean: true
  },
- add to package.js in scripts section: `"dev": "webpack serve  --config webpack.dev.js --open"` note that the `serve` will be associated with webpack-dev-server we will install later
- in dev.js file, add: devServer: {
    port: 3000
  },    port need to be different than the port for the local server
- to run, type `npm start` to start local server and then `npm run dev` (need to run `npm run prod` before both these steps)

# HTML webpack plugin 
- install html webpack plugin: npm i -D html-webpack-plugin
- require plugin at top of webpack.dev and webpack.prod: const htmlWebpackPlugin = require("html-webpack-plugin")
- add 
plugins: [
      new htmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
      })
  ]   after the entire modules curly braces for both the dev and prod files

# Install Webpack-dev-server 
- for hot reload 
- `npm i -D webpack-dev-server`  --> now the `serve` in the dev script will work
- make sure `"webpack-dev-server": "^3.11.0"` has been added to devdependencies in package.json

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
                dry: true,
                verbose: true,
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
- in prod.js and dev.js add: 
    {
        test: /\.html$/i,
        loader: 'html-loader',
      },
- type npm i -D file-loader
- Add to dev.js and prod.js: 
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "img/",
              publicPath: "img/",
              name: "[name][hash].[ext]"
            }
          }
        },
- for both prod and dev add { test: '/.js$/', 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }, 
- Create an image folder somewhere
### To add image 
- in the js folder where you will be updating the elements that require the image, type `import myImg from "./image/image.png"`
- then, do something like `document.getelementbyid.src = myImg`
- can also render image from css using `variable.style.backgroundImge = ""`
### To dynamically create an image in your html
- In the js file that will render the image, type of the following 
- `let myImg = require.context("../images/icons");` (the info in the () should be where the images are contained)
- ``let weatherIcon = myImg(`./${dataObj.newWeatherEntry[0].icon}.png`).default;`` (the info inside the () is the dynamic image you are searching for, note the `./` and the `.png` or other extension, too)
- `let newImg = document.createElement("img");`
- `newImg.src = weatherIcon;`

## Installing Jest 
- npm i -D jest 
- add "test":"jest" into package.json under "scripts"
- create folder in root called __tests__ (double underscore on either side)
- create a file with the function or file name followed by .spec.js (ex - handleSubmit.spec.js)
- in spec.js, create test by writing: 
describe("name of fxn", () => {}); 
- within the {} above, type: 
test("what the fxn does", () => {//actual test}) 

## Add dotenv
- `npm install dotenv` to utilize .env files in server.js
- `require('dotenv').config()` at top of server.js file
- create `.env` file in root and add `API_KEY: $$$$$$$$`
- ADD .env file to .gitignore!!!
- call api_key with : `process.env.API_KEY` in the server.js folder

## Incorporate CORS
- npm install cors
- add const cors = require("cors"); to top of server.js
- add app.use(cors()); to server.js

## Need to have node-fetch if using fetch on server
- npm install node-fetch
- const fetch = require('node-fetch'); at top of server.js
- now you can use async await in the node server

## Add nodemon for auto-reload of servers
- `npm install --save-dev nodemon` in terminal to install nodemon
- go to package.json and add 
"scripts": {
    "nodemon": "nodemon ./src/server/server.js localhost 2000" (note that the path after nodemon depends on where the server is in relation to package.json)
  },
- use npm run dev to start the nodemon server

### To get the project running 
- npm start 
- npm run build-prod
- npm run build-dev 
- npm run sass