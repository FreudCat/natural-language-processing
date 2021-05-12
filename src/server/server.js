const path = require('path')
const express = require("express"); 
const bodyParser = require("body-parser"); //middleware to handle POST req. Extracts body portion of incoming req and allows it to be read on req.body. Deprecated - see below 
const cors = require("cors");
const fetch = require("node-fetch");
const dotenv = require('dotenv');

const app = express(); 
const port = 8080; 

app.use(cors()); 
dotenv.config();

//bodyparser is deprecated - use the following instead
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  //Since body-parser is deprecated, this line is used instead 
//app.use(bodyparser.json()); <-- Example of how I would have incorporated bodyparser middleware after requiring it at the top of the file via const bodyParser = require("body-parser");
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
  });

app.post("/getData", async (req, res) => {
  console.log(req.body);
  let url = req.body.userURL; 
  let sentimentData = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`);
  let data = await sentimentData.json();
  console.log(data);
  console.log(data.agreement);
  res.send(data);  //sends the sentiment data back to the post req in the handlesubmit js
})

//polarity: (positive/'negative')
//subjectivity: ('subjective', factual)
//text: a text snippet from the article