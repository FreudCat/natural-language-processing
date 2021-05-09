export const handleSubmit = (e) => {   //notice the "export" in front of function declaration -> it will be exported so that it can be imported by another js file, in this case index.js in the src folder. 
  e.preventDefault();
  console.log("I was clicked"); 

  let name = document.getElementById("name").value;
  let userURL = document.getElementById("url").value;
  const inputErr = document.getElementById("err-holder"); 

  

  console.log(`${name} ${userURL}`);
  inputErr.innerHTML = "";

  if (userURL )

  if ((name) && (userURL) || (!userURL)) {
    return true;
  } else if ((!name) && (userURL)){
    inputErr.innerHTML = "Please enter your name";
  } else if ((name) && (!userURL)) {
    inputErr.innerHTML = "Please enter a valid "
  }
}

