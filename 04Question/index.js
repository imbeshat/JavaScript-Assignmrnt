// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let str = "Java Script is not a weird language";
if (str.includes("Script")) {
	console.log(`${str} is a string which contains the word "Script"`);
} else {
	console.log(`${str} is a string which does not contain the word "Script"`);
}
