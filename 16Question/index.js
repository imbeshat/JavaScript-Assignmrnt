const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter month name : ", (months) => {
	let month = months.toLowerCase();
	if (month === "september" || month === "october" || month === "november") {
		console.log(`The season is Autumn`);
	} else if (month === "december" || month === "january" || month === "february") {
		console.log(`The season is Winter`);
	} else if (month === "march" || month === "april" || month === "may") {
		console.log(`The season is Spring`);
	} else if (month === "june" || month === "july" || month === "august") {
		console.log(`The season is Summer`);
	} else {
		console.log(`${month} is not a valid marks.`);
	}
	readline.close();
});
