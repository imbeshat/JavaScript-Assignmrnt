let evenArr = [];
let oddArr = [];
for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		evenArr.push(i);
	} else {
		oddArr.push(i);
	}
}

console.log("Even Array: " + evenArr);
console.log("Odd Array: " + oddArr);
