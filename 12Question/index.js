// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

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
