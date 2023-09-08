// Primitive datatypes 


// 7 types : String, Number , Boolean, null, undefined, symbol, BigInt

// Reference Type (Non Primitve);

// Array, Objects, Functions;

// # JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. 

// whatever under curly braces are objects 

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = 'prashant';
let anothername = myYoutubeName;
anothername = 'mohan';

console.log(myYoutubeName);
console.log(anothername);


let userOne = {
    email : 'p@gmail.com',
    userName : 'Krishna'
}

let userTwo = userOne;
userTwo.userName = 'Shyam';
console.log(userOne);
console.log(userTwo);