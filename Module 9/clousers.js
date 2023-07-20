function test(){
    let a = 2;

    function test1(){ //this function will always have access to its outer scope function also known as lexical scope
        console.log(a);
    }

    return test1;
}

// let fun = test();
// console.log(fun);
// fun();

function greet(){
    let name = 'Kanha';

    function displayName(){
        console.log('Namaste ' + name);

        let age = 21;

        function displayAge(){
            console.log('Namaste I am ' + name +' and my age is '+age);
        }
        return displayAge;
    }
    return displayName;
}

let g = greet();
// console.log(g);
// g();
let g1 = g();
console.log(g1);
g1();