export const showData = (data, resultsHolder) => {
  console.log(data);

  let sentimentObj = {
    agreement: data.agreement,
    subjectivity: data.subjectivity,
    irony: data.irony,
    confidence:data.confidence
  };
  console.log(sentimentObj);

  for (let item in sentimentObj) {
    let newP = document.createElement("p"); //create a <p></p> tag
    newP.id = item; //generate unique ids for each p tag
    newP.classList.add("result-text");
    let feeling = sentimentObj[item].toLowerCase(); //change the word to all lowercase
    item = item[0].toUpperCase() + item.slice(1); //capitalize the first letter 
    newP.innerHTML = `${item}: ${feeling}`; 
    console.log(newP);
    resultsHolder.appendChild(newP); //Appending into the DOM 
  }
}