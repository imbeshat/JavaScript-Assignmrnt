// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

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
