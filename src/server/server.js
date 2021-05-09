const path = require('path')
const express = require("express"); 
const app = express(); 
const port = 8080; 
const dotenv = require('dotenv');
const cors = require("cors");
const fetch = require("node-fetch");

dotenv.config();
app.use(cors());
app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  //Since body-parser is deprecated, this line is used instead 
//app.use(bodyparser.json()); <-- Example of how I would have incorporated bodyparser middleware after requiring it at the top of the file via const bodyParser = require("body-parser");

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
}); 

app.post("/getData", async (req, res) => {
  let url = req.body; 
  console.log(url);
  let sentimentData = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`);
})