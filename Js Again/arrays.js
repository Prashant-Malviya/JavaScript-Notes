// arrays

const myArr = [0,1,2,"prashant",0,2];
const myheroes = ['mohan','saktiman','pawanputra'];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[5]);

// Array Mehtods 
myArr.push(5);
myArr.pop(5);
console.log(myArr);

myArr.unshift(29); // adds in the begining
console.log(myArr);
myArr.shift()
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(2));
console.log(myArr.indexOf(2));

const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);


// slice, splice

console.log('A ', myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("A ",myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
myArr.push(23,32,23)
console.log(myArr)
myn3 = myArr.splice(1,3);
console.log(myn3);
console.log(myArr);
