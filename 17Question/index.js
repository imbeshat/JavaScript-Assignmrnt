const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter month name : ", (months) => {
	let mon = months.toLowerCase();
	let month = mon.charAt(0).toUpperCase() + mon.slice(1);
	if (
		month === "January" ||
		month === "March" ||
		month === "May" ||
		month == "July" ||
		month === "August" ||
		month == "October" ||
		month == "December"
	) {
		console.log(`No. of days in ${month} = 31`);
	} else if (month === "February") {
		console.log(`No. of days in ${month} = 28`);
	} else if (month === "April" || month === "June" || month === "September" || month === "November") {
		console.log(`No. of days in ${month} =30`);
	} else {
		console.log(`${month} is not a valid month.`);
	}
	readline.close();
});
