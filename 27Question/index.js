let prm = [];
for (let i = 0; i <= 100; i++) {
	let flag = false;
	for (let j = 2; j < i; j++) {
		if (i % j == 0) {
			flag = true;
			break;
		}
	}
	if (flag == false && i > 1) {
		prm.push(i);
	}
}
console.log(prm);
