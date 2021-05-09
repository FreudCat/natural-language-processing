const regex = /^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/;
let userURL = document.getElementById("url");// all regex needs to be within forward slash. Ex: /regexPattern/
//^ matches beginning of input
//(?:https?:\/\/)? --> ?: indicates the following (in this case https)is a non-captured group, it is recognized but ignores it in final result
// note that \ is an escape character -> ?:\/\/ -> non-captured group is // 
// (?:https?:\/\/)?  the final ? means that either it will "match" if the user input matches 0 or 1 of the requirements within the (). This allows a user to include http:// or not and it will be fine. 

// [^./] the ^ is a exception assertion -> the next character can be anything except . or / 
// $ matches the end of input

export const urlValidate = (userURL) => {
  //let userURL = document.getElementById("url").value;
  console.log(userURL);
  if (regex.test(userURL)) {
    return true; 
  } else {
    return false; 
  }
}
