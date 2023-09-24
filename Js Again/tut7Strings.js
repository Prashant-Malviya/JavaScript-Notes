const myName = 'Prashant';
const repositories = 25;

console.log(myName + repositories + "values"); // Prashant25values


console.log(`HI I am ${myName} and my repos are ${repositories}`); // string interpolation

const gameName = new String('saktiman');

console.log(gameName[0]); // s
console.log(gameName.__proto__) // {}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);// it won't include last index value that is 4 // sakt
console.log((newString));


const anotherString = gameName.slice(-8,5);// it also work as substring but it can take negative parameter as well
console.log(anotherString);

const newStringOne = "           prashant           ";
console.log(newStringOne);
console.log(newString.trim());

const url = "https://prashantmalviya%50prashant";
console.log(url.replace('%50', '__'));

console.log(url.includes('prashant'));
console.log(gameName.split('_'));