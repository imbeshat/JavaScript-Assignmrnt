const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter filename : ", (fileName) => {
	console.log("Extension of file : ", fileName.split(".").pop());
	readline.close();
});
