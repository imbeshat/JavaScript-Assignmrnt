let date = new Date();
console.log(date);

let specifiedDate = new Date(1970, 01, 01);

console.log("Year today = ", date.getFullYear());
console.log("Month today = ", date.getMonth());
console.log("Date today = ", date.getDate());
console.log("Day today = ", date.getDay());
console.log("Hour now = ", date.getHours());
console.log("Minute now = ", date.getMinutes());
console.log("Seconds elapsed between Jan 1, 1970 till now = ", (date - specifiedDate) / 1000);
