// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter 1st number : ", (num1) => {
	readline.question("Enter 2nd number : ", (num2) => {
		readline.question("Enter operation to be performed : ", (operation) => {
			if (operation === "+") {
				console.log(Number(num1) + Number(num2));
			} else if (operation === "-") {
				console.log(Number(num1) - Number(num2));
			} else if (operation === "*") {
				console.log(Number(num1) * Number(num2));
			} else if (operation === "/") {
				console.log(Number(num1) / Number(num2));
			} else if (operation === "%") {
				console.log(Number(num1) % Number(num2));
			} else {
				console.log("Invalid operation");
			}
			readline.close();
		});
	});
});
