// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// let myArray = ['p','2','3','d','g'];
// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
    
// }

// ++++++++++++++ Array & object specific loops +++++++++++

const arr = [2,3,4,5,6,6];

// ------------> for of loop 

// for (const num of arr) {
//     console.log(num);
// }

const greetings = 'hellow world';
for (const greet of greetings) {
    // console.log(greet)
}

// Maps : The Map object holds key-value pairs and remembers the original insertion order of the keys. 

const map = new Map();
map.set('a',2);
map.set('b',4);
map.set('c',43);
map.set('d',42);

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ' :- ', value);
}

const myObj = {
    'g1' : 'nfs',
    'g2' : 'spiderman'
}
// for of loop is not use for object iteration 
// for (const [key,value] of myObj) {
//     console.log((key, " :- ", value));
// }


// to iterate object we use another technique 


const myObj2 = {
    js : 'javaScript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for (const key in myObj2) {
//    console.log(key);
// }
for (const key in myObj2) {
//    console.log(key + ' --> ' + myObj2[key]);
    // console.log(`${key} shortcut is for ${myObj2[key]}`);
}

let programming = ['js','ruby','py','java','cpp'];

for (const key in programming) {
    // console.log(`The programming language is ${programming[key]}`)
}


const map1 = new Map();
map1.set('a',2);
map1.set('b',4);
map1.set('c',43);
map1.set('d',42);


// for (const key in map1) {
//     console.log(`${key}`);
// } // output <------since maps are not iterable by forin loops they can iterate throught forof loop


const coding = ['js','ruby','java','py','cpp'];

// coding.forEach(function (element){
//     console.log(element);
// });
// coding.forEach((element) => {
//     console.log(element)
// });

function printAnything(element){
    // console.log(element);
}

coding.forEach((printAnything));

coding.forEach((element,index,arr) => { 
    // console.log(element,index,arr)
})


const myCoding = [
    {
        languageName : 'js',
        languageFileName : '.js'
    },
    {
        languageName : 'java',
        languageFileName : '.java'
    },
    {
        languageName : 'c++',
        languageFileName : '.cpp'
    }
]

myCoding.forEach(( element) =>{
    console.log(`${element.languageName} --> ${element.languageFileName} `);
})





