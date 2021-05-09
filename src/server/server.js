const path = require('path')
const express = require("express"); 
const app = express(); 
const port = 2000; 
const dotenv = require('dotenv');
dotenv.config();

app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
}); 
