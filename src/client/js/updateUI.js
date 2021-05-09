export const showData = (data) => {
  let agreement = data.agreement;
  let subjectivity = data.subjectivity;
  let irony = data.irony;
  let confidence = data.confidence;

  console.log(agreement, subjectivity, irony, confidence);
}