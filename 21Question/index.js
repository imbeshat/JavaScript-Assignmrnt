// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["India", "Pakistan", "Sri Lanka", "Bangladesh", "Afghanistan"];
if (countries.indexOf("Ethiopia") == -1) {
	countries.push("ETHIOPIA");
}
console.log("Country array: ", countries);
