const myName = 'Prashant';
const repositories = 25;

console.log(myName + repositories + "values");


console.log(`HI I am ${myName} and my repos are ${repositories}`); // string interpolation

const gameName = new String('saktiman');

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log((newString));


const anotherString = gameName.slice(-8,5);
console.log(anotherString);

const newStringOne = "           prashant           ";
console.log(newStringOne);
console.log(newString.trim());

const url = "https://prashantmalviya%50prashant";
console.log(url.replace('%50', '__'));

console.log(url.includes('prashant'));
console.log(gameName.split('_'));