// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

console.log(Boolean(4 > 3));
console.log(Boolean(4 >= 3));
console.log(Boolean(4 < 3));
console.log(Boolean(4 <= 3));
console.log(Boolean(4 == 4));
console.log(Boolean(4 === 4));
console.log(Boolean(4 != 4));
console.log(Boolean(4 !== 4));
console.log(Boolean(4 != "4"));
console.log(Boolean(4 == "4"));
console.log(Boolean(4 === "4"));

let py = "python";
let jar = "jargon";
console.log(`Length of ${py} = `, py.length);
console.log(`Length of ${jar} = `, jar.length);
console.log(Boolean(py.length != jar.length));
