const path = require('path')
const express = require("express"); 
const app = express(); 
const port = 2000; 

app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
}); 
