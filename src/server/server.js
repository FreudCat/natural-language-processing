const express = require("express"); 
const app = express(); 
const port = 2000; 

app.listen(port, () => {
  console.log(`Listening on port ${port}`); 
}); 

app.use(express.static("dist"));