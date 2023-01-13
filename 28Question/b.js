// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let str = "";
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		str += "*";
	}
	str += "\n";
}
console.log(str);
