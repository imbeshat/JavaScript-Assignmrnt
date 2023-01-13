// 23. Write a program to check that the number given by the user is a prime number or not.

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter a number : ", (num) => {
	let flag = false;
	if (num == 1) {
		console.log(`${num} is neither a prime nor a composite number`);
	} else if (num > 1) {
		for (let i = 2; i < num / 2; i++) {
			if (num % i == 0) {
				flag = true;
				break;
			}
		}
		if (flag == false) {
			console.log(`${num} is a prime number`);
		} else {
			console.log(`${num} is not a prime number`);
		}
	} else {
		console.log(`${num} is not a prime number`);
	}
	readline.close();
});
