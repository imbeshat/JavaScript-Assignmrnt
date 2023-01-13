const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter a number to print it's table : ", (num) => {
	let i = 1;
	while (i <= 10) {
		console.log(`${num} * ${i} = ${num * i}`);
		i++;
	}
	readline.close();
});
