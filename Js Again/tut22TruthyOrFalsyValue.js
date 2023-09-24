// const userEmail = 'p@gmail.com'; // o/p = true
// const userEmail = '';  // o/p = false
const userEmail = [];  // o/p = true

// if(userEmail)
//     console.log('corrected');
// else console.log('not corrected');


// falsy values

// false, 0, -0, BigInt, 0n, "", null , undefined, NaN;

// truthy values 
// "0", 'false',"",[],{},function(){}


// if(userEmail.length === 0)
//     console.log('array is empty');

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0)
//     console.log('object is empty');

if(false == 0) console.log('false true'); // true when compare false == 0 then output will be true


if(false == '') console.log('empty true');

if(0 == '')  console.log('0 true');


//=======================
// Nullish Coaliscing Operator (??) : null undefined 
// this is mainly formed for when we work with databases 
let val1;
val1 = 4 ?? 20;

val1 = null ?? 20;
val1 = undefined ?? 19;

val1 = null ?? 10 ?? 20 // gives only first value except null or undefined ie 10


console.log(val1);


// terniary operator 

const price = 20;

price >= 20 ? console.log('elegible') : console.log('not elegible');






