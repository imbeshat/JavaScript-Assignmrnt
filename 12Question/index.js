let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
if (month < 10) {
	month = "0" + month;
}
let curDate = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();

console.log(year + "-" + month + "-" + curDate, " " + hour + ":" + minute);
console.log(curDate + "-" + month + "-" + year, " " + hour + ":" + minute);
console.log(curDate + "/" + month + "/" + year, " " + hour + ":" + minute);
