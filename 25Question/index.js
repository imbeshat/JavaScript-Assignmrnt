const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Enter height in meters : ", (height) => {
	readline.question("Enter weight in Kg : ", (weight) => {
		let BMI = bmi(height, weight);
		console.log("Your BMI:", BMI);
		if (BMI < 18.5) {
			console.log("You are underweight");
		} else if (BMI >= 18.5 && BMI <= 24.9) {
			console.log("You are normal");
		} else if (BMI >= 25 && BMI <= 29.9) {
			console.log("You are overweight");
		} else {
			console.log("You are obese");
		}
		readline.close();
	});
});

function bmi(height, weight) {
	return weight / (height * height);
}
