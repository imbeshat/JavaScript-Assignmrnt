const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter month name : ", (months) => {
	let mon = months.toLowerCase();
	let month = mon.charAt(0).toUpperCase() + mon.slice(1);
	if (month === "September" || month === "October" || month === "November") {
		console.log(`The season is Autumn`);
	} else if (month === "December" || month === "January" || month === "February") {
		console.log(`The season is Winter`);
	} else if (month === "March" || month === "April" || month === "May") {
		console.log(`The season is Spring`);
	} else if (month === "June" || month === "July" || month === "August") {
		console.log(`The season is Summer`);
	} else {
		console.log(`${month} is not a valid month.`);
	}
	readline.close();
});
