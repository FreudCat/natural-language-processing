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
- install webpack via command line: npm i webpack webpack-cli 
- in package json add "build": "webpack" to scripts
- add "webpack-dev-server": "^3.11.0" to devdependencies in package.json
- add a file webpack.config.js in the root folder
- add const path = require("path")
const webpack = require("webpack")
module.exports = {
} to the webpack.config.js folder
