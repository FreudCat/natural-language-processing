import {urlValidate} from "../js/validate"; 

export const handleSubmit = (e) => {   //notice the "export" in front of function declaration -> it will be exported so that it can be imported by another js file, in this case index.js in the src folder. 
  e.preventDefault();
  console.log("User clicked button"); 

  let name = document.getElementById("name").value;
  let userURL = document.getElementById("url").value;
  const inputErr = document.getElementById("err-holder");
  
  console.log(`${name} ${userURL}`);

  let URLcheck = urlValidate(userURL);  //calls function to validate URL
  
  inputErr.innerHTML = ""; //clears out any previous innerhtml 

  if ((name) && (userURL)) {
    getSentiment(userURL)
      .then(function (data) {
        console.log(data)
      })
  } else {
    inputErr.innerHTML = "Please enter your name and a valid URL"
  }
}


const getSentiment = async (userURL) => { //posting the userurl so that the server can get the data. 
  let fetchSentiment = await fetch ("http://localhost:8080/getData", { //since the server is in 8080 and the dev is on 3000, need to include the entire url instead of just the /getData route
  method: "POST",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({userURL}) //Notice this was sent as an object
  });
  let data = await fetchSentiment.json();
  console.log(data.agreement);
}