// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter a number : ", (num) => {
	if (num % 2 == 0) {
		console.log(`${num} is even`);
	} else {
		console.log(`${num} is odd`);
	}
	readline.close();
});
