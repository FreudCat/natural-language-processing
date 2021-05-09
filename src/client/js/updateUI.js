export const showData = (data) => {
  console.log(data);

  const resultsHolder = document.getElementById("result-holder");

  let sentimentObj = {
    agreement: data.agreement,
    subjectivity: data.subjectivity,
    irony: data.irony,
    confidence:data.confidence
  };
  console.log(sentimentObj);

  for (let item in sentimentObj) {
    console.log(item);
    let newP = document.createElement("p");
    newP.id = item; 
    newP.innerHTML = sentimentObj[item];
    console.log(newP);  
    resultsHolder.appendChild(newP);
  }
}