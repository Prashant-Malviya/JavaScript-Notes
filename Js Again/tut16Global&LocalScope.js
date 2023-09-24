
// global scope 
let a = 1;
var b = 2;
const c =37;

if(true){ // local scope 
    let a = 2;
    const c = 3;
    var b = 3;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName = 'prashant';

    function two(){
        const website = 'youtube';
        console.log(userName);
    }
    // console.log(website);

    two();
}

// one());

// +++++++++++++++++ interesting concept MINI HOISTING +++
console.log(addOne(3)) //it can be execute

function addOne(num){
    return num+1;
}


console.log(addTwo(3)) // we have hold the value in variable so its not possible to execute it

const addTwo = function addTwo(num){
    return num+2;
}










