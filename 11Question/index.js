// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(date);

let specifiedDate = new Date(1970, 01, 01);

console.log("Year today = ", date.getFullYear());
console.log("Month today = ", date.getMonth());
console.log("Date today = ", date.getDate());
console.log("Day today = ", date.getDay());
console.log("Hour now = ", date.getHours());
console.log("Minute now = ", date.getMinutes());
console.log("Seconds elapsed between Jan 1, 1970 till now = ", Math.round((date - specifiedDate) / 1000));
