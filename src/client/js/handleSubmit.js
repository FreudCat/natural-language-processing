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
  } else {
    inputErr.innerHTML = "Please enter your name and a valid URL"
  }
}


