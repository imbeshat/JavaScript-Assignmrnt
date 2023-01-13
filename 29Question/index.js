// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter filename : ", (fileName) => {
	console.log("Extension of file : ", fileName.split(".").pop());
	readline.close();
});
