const marvel_heros = ['thor','Ironman','spiderman'];
const dc_heros = ['superman','flash','batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);


// console.log(marvel_heros[3]);

const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);


const allNewHeros = [...marvel_heros,...dc_heros,...allheros];// spread operatior ...
console.log(allNewHeros);

const anotherArr = [1,2,3,4,5,[2,3,4],7,[5,3,[2,3]]];


const realAnotherArray = anotherArr.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray('prashant'))
console.log(Array.from("prashant"))
console.log(Array.from({name:'prashant'})) // it won't convert it to array while convert it to empty array;
console.log(Array.of({name:'prashant'}))


let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1,score2,score3))


