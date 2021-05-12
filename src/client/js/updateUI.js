export const showData = (data, resultsHolder) => {

  if (data.status.code == 212) { //will fire when key and URL passed to meaningcloud, and meaningcloud returned with status code 212 and determined there was content to analyze.  
    console.log("MeaningCloud status code 212: No content to analyze");
    let newP = document.createElement("p");
    resultsHolder.appendChild(newP);
    newP.classList.add("status-code-msg");
    newP.innerHTML = "The URL is valid, but MeaningCloud determined there was no content to analyze. Please try another URL."

  } else {

    resultsHolder.innerHTML = "";
    let sentimentObj = {
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      irony: data.irony,
      confidence: data.confidence
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
}