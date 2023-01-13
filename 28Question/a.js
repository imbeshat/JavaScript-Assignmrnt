// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let str = "";
for (let i = 0; i < 3; i++) {
	for (let j = 0; j <= i; j++) {
		str += "*";
	}
	str += "\n";
}
console.log(str);
