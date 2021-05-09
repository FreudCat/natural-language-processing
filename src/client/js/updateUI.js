export const showData = (data) => {
  console.log(data);

  let sentimentObj = {
    agreement: data.agreement,
    subjectivity: data.subjectivity,
    irony: data.irony,
    confidence:data.confidence
  };

  console.log(sentimentObj);
}