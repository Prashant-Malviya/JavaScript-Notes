// Primitive datatypes 


// 7 types : String, Number , Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

console.log(typeof null); // object

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) // always give false since symbol is used for uniqueness

const bigNumber = 32345353233443454544n; // since it is bigInt we put n to the last to represent

console.log(typeof bigNumber) // bigint

// Reference Type (Non Primitve);

// Array, Objects, Functions;

// # JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. 

// whatever under curly braces are objects 

const heroes = ['shaktiman', 'ganesh', 'krishna'];
console.log(typeof heroes);

const myObj = {
    name : 'prashant',
    age : 22
}

console.log(typeof myObj);

const myFunction = function(){
    console.log('namaste world');
}

console.log(typeof myFunction); // function

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = 'prashant';
let anothername = myYoutubeName;
anothername = 'mohan';

// console.log(myYoutubeName);
// console.log(anothername);


let userOne = {
    email : 'p@gmail.com',
    userName : 'Krishna'
}

let userTwo = userOne;
userTwo.userName = 'Shyam';
// console.log(userOne);
// console.log(userTwo);

