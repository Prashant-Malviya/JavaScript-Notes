const marvel_heros = ['thor','Ironman','spiderman'];
const dc_heros = ['superman','flash','batman'];

// marvel_heros.push(dc_heros); // it would put one arr into the other
// console.log(marvel_heros);


// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros); // it would concate two arrays and returns new array
console.log(allheros);


const allNewHeros = [...marvel_heros,...dc_heros,...allheros];// spread operatior ... // it would spread the array
// console.log(allNewHeros);

const anotherArr = [1,2,3,4,5,[2,3,4],7,[5,3,[2,3]]];


const realAnotherArray = anotherArr.flat(Infinity);
console.log(realAnotherArray);


// console.log(Array.isArray('prashant'))
console.log(Array.from("prashant")) // makes the array of given string
// console.log(Array.from({name:'prashant'})) // it won't convert it to array while convert it to empty array;
console.log(Array.of({name:'prashant'}))


let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1,score2,score3))


