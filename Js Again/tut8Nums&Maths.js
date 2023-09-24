const score = 400;
console.log(score);
const balance = new Number(500);
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // 500.00 it would fixed it to upto 2 decimal places

const otherNumber  = 23.02;
console.log(otherNumber.toPrecision(2))// gives us the round of valu means it would provide us precise values

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++  Maths ++++++++++++++++++

console.log(Math);

console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.2));

console.log(Math.max(3,4,5,3,2));
console.log(Math.min(5,2,4,-2,2,-1));



console.log(Math.random());

console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);