const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let agesSorted = ages.sort();

let maxAge = Math.max(...agesSorted);
let minAge = Math.min(...agesSorted);
console.log("Maximum age:", maxAge);
console.log("Minimum age:", minAge);

const mid = Math.floor(agesSorted.length / 2);
if (agesSorted.length % 2 !== 0) {
	console.log("Median age:", agesSorted[mid]);
} else {
	console.log("Median age:", (agesSorted[mid - 1] + agesSorted[mid]) / 2);
}

let average = agesSorted.reduce((acc, curr) => acc + curr, 0) / agesSorted.length;
console.log("Average age:", average);

console.log("Range of the ages:", maxAge - minAge);

console.log(Boolean(Math.abs(minAge - average) === Math.abs(maxAge - average)));
