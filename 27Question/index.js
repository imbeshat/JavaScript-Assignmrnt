// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let prime = [];
for (let i = 0; i <= 100; i++) {
	let flag = false;
	for (let j = 2; j < i; j++) {
		if (i % j == 0) {
			flag = true;
			break;
		}
	}
	if (flag == false && i > 1) {
		prime.push(i);
	}
}
console.log(prime);
