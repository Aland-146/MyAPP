let myAge = 20; // I am 20 years old

// If we convert my age to seconds, how many seconds have I lived so far?

const findMyAge = (age) => {

  let oneMinute = 60; // 1 minute equlas 60 seconds
  let oneHour = 60; // 1 hour equals 60 minutes
  let oneDay = 24 // 1 day equals 25 hours
  let oneYear = 365 // 1 year equals 365 days

  let ageInSeconds = age * oneYear * oneDay * oneHour * oneMinute; // Basic arthimatic operation to find the age in seconds

  console.log(ageInSeconds);

 }

 findMyAge(myAge);
