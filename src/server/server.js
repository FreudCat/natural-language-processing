const path = require('path')
const express = require("express"); 
const app = express(); 
const port = 8080; 
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();
app.use(cors());
app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
}); 

app.get("/getKey", function(req, res) {
  res.send(process.env.API_KEY)
});
