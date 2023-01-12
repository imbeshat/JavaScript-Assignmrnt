const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter your marks : ", (marks) => {
	if (marks >= 80 && marks <= 100) {
		console.log(`You have secured "A" grade as your marks was ${marks}`);
	} else if (marks >= 70 && marks <= 79) {
		console.log(`You have secured "B" grade as your marks was ${marks}`);
	} else if (marks >= 60 && marks <= 69) {
		console.log(`You have secured "C" grade as your marks was ${marks}`);
	} else if (marks >= 50 && marks <= 59) {
		console.log(`You have secured "D" grade as your marks was ${marks}`);
	} else if (marks >= 0 && marks <= 49) {
		console.log(`You have secured "F" grade as your marks was ${marks}`);
	}
	readline.close();
});
