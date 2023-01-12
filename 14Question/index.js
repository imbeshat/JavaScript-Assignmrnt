const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter a number : ", (num) => {
	if (num % 2 == 0) {
		console.log(`${num} is divisible by 2`);
	} else {
		console.log(`${num} is not divisible by 2`);
	}
	readline.close();
});
