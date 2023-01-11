let age = prompt("Enter your age: ");

if (age >= 18) {
	alert("You are old enough to drive!");
} else {
	alert(`You are young. Please waitr for ${18 - age} years to drive!`);
}
