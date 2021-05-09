const path = require('path')
const express = require("express"); 
const bodyParser = require("body-parser"); //middleware to handle POST req. Extracts body portion of incoming req and allows it to be read on req.body. Deprecated - see below 
const cors = require("cors");
const fetch = require("node-fetch");
const dotenv = require('dotenv');

const app = express(); 
const port = 8080; 
<<<<<<< HEAD
const dotenv = require('dotenv');
const cors = require("cors");
const fetch = require("node-fetch");
||||||| 0c01502
const dotenv = require('dotenv');
const cors = require("cors");
=======
>>>>>>> refs/remotes/origin/main

dotenv.config();
app.use(cors());
//bodyparser is deprecated - use the following instead
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  //Since body-parser is deprecated, this line is used instead 
//app.use(bodyparser.json()); <-- Example of how I would have incorporated bodyparser middleware
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  //Since body-parser is deprecated, this line is used instead 
//app.use(bodyparser.json()); <-- Example of how I would have incorporated bodyparser middleware after requiring it at the top of the file via const bodyParser = require("body-parser");

app.use(express.static("dist"));

||||||| 0c01502
app.use(express.static("dist"));

=======
>>>>>>> refs/remotes/origin/main
app.get("/", function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
}); 

<<<<<<< HEAD
app.post("/getData", async (req, res) => {
  let url = req.body; 
  console.log(url);
  let sentimentData = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`);
})
||||||| 0c01502
app.get("/getKey", function(req, res) {
  res.send(process.env.API_KEY)
});
=======
app.post("/getData", async (req, res) => {
  console.log("req.body");
  let url = req.body; 
  let sentimentData = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`);
})
>>>>>>> refs/remotes/origin/main
