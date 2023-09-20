let score = null;

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber); // NaN


// '22' = 22
// '2qga' = NaN
// true = 1; false = 0;


let isLoggedIn = '';

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 - true; 0 - false
// "" - false
// "hitesh" - true;

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);