// 'use strict'; //this u'll understand on js oops module


console.log('Jai Hind Prashant');

// array methods in js <------------------
{
let arr = [1, 3, 'prashant', 'mohan'];
// console.log(arr[1]);

// push method 
arr.push('radha');
// console.log(arr);

// pop method 
arr.pop();
// console.log(arr);

// shift method deletes an element from the front of the array
arr.shift();
// console.log(arr);

//unshift method --> add the value at the starting
arr.unshift('Giridhar');
// console.log(arr);

}

// Objects in Js <-------------------------------
{
    // Objects --> objects are key value pairs in js
    let person = {
        firstName: "Mohan",
        secondName: "Radha",
        do: "everything"
    }
    // console.log(person);

    // Accessing elements of the objects 


    // dot notation to access any value inside from an object
    // console.log(person.do );

    // bracket notation
    a = person['secondName'];
    // console.log(a);


    let india = {
        wPC: "world's powerful country",
        count: [0, 1, 2, 3, 'all start from zero given by india'],

        isGreat: false,

        // nested objects

        MP: {
            what: 'it is a state',
            locate: 'in heart of india',
            quality:
            {
                greenry: 'most regions covered from trees and hills',
                temples: 'very famous temple out there'
            }
        }
    }

    // updating the value 

    india.isGreat = true;


    // console.log(india.temples);
    // console.log(india.count[4]);


    // reseting array values 

    india.count = [0, 'has been given by india', 'true'];

    // deleting the objects value
    delete india.isGreat;
    // console.log(india);

    // functions can also be use inside an object 

}

// Conditionals in js <----------------------------
{
    // let score = 99;
    // if(score > 90) console.log('You are A++ Stduent');
    // else if(score < 90 && score >= 80) console.log('You are A+ student');
    // else if(score < 80 && score >= 60) console.log('You are A student');
    // else console.log('You are good student');
}

// Loops in js <------------------
{
    //  For in loop  <-------------
    // in js the for-in loop allows you to loop through the properties of an Object;
    // The sstatements of code found within the loop body will be executed once for each property of the Object. 
    let colors = {
        primary: "blue",
        secondary: "red",
        tertiary: "white"
    }

    for (let color in colors) {
        // as we know there are two methods of accessing the object elements one is dot notation and another one is bracket notation so try to use bracket notation here 
        // console.log(color + ' --> '+colors[color]);
    }

    // arrays are also objects in js 

    // let colorsArray = ['Yellow','Green','Orange'];
    // for(let color in colorsArray) 
    //     // console.log(color +' --> ' + colorsArray[color]);
    //     console.log(colorsArray[color]);


    // for of loop <------
    // the for of statement creates a loop iterating over iterable objects,
    // including: build-in String, array , array-like objects like NodeList and also map and set


    let scoreOfSubjects = [90, 98, 97, 92];

    // in this for of loop below u can notice that score variable is actually holding the values of the array instead of holding indexes 
    // this is the diffrence between for-in and for-off loop 

    // for(let score of scoreOfSubjects)
    //     console.log(score)


    // if we want to access the index also then we can use entries method 

    let coloR = ['red', 'white', 'yellow'];

    // for(let [index,color] of coloR.entries()){
    //     console.log(index +' --> '+color);
    // }

    // iterating through the string 
    let str = 'Krishna';
    // for(let char of str)
    //     console.log(char);


    // mcq <----------------
    // let num1=2;
    // let num2=02;
    // if(num1==num2)
    //  console.log("true" + num2);
    // else
    //  console.log("false");
}

// Functions in js <--------------------
{
    function greet() {
        console.log('good morning');
    }
    // greet(); //function invocation

    function sum(a, b) {
        console.log(a + b);
    }

    // sum(4,3);

    let add = function (a, b) { // <-------------- this function has'nt any name so this is known as 'anonymous function'
        return a + b;
    }
    // console.log(add(4,2));

}
// Hoisting in js <-------------------------------------
{
    // hi();
    // console.log(namaste);

    let namaste = 'hi from namaste';
    function hi() {
        console.log('hi prashant from function');
    }

    // let result = multiplication(3,2)
    // console.log(result);

    // let multiplication = function(a,b){
    //     return a*b;
    // }

}

// mcq <----------------
{
    // num1=3;
    // function cal() {
    // num1=6;
    // num2=5;
    // num3=num2*num1;
    // console.log(num3);
    // }
    // cal();

    // What is the output of the following code?
    // function Add(){
    //     console.log(answer)
    //     var answer = 2
    // };
    // Add()


    // What will be the output of the following code?

    // function fn(){
    //  return 4+5;
    // }
    // console.log(fn(3,7));

}

// ES6 <--------------------
{
// problem with var 
// var a = 22;
// var a = 34;

// console.log(a);

// if(a==34){ var b = 40;
//             console.log(b)};
// console.log(b);

// variable declared with 'var' keyword are not 'blocked scope' but they are 'function scoped' 

// function test(){
//     var c = 32;
//     console.log(c);
// }
// test();
// console.log(c);

// var a = 20;
// var a = 23;
// console.log(a);

// solution of the Redeclartion Problem by 'let' keyword

// let b = 20;
// let b = 22;

// if(true){
//     let c = 50; // <--------------- 'let' keyword is blocked scoped ;
//     console.log(c);
// } // 
// console.log(c); 

// we can reasign let value <------------
// b = 222;


// const keyword : it is blocked scoped <-----------------------
// const g = 2; 
// g = 1;
// console.log(g);

// Arrow Function <----------------------
let test1 = () => {
    console.log(1);
}
let test2 = (a) => {
    console.log(a * 2);
}
let test3 = (a, b) => {
    console.log(a * b);
}

let test4 = (a, b, c) => console.log(a + b + c);

// test1();
// test2(2);
// test3(2,3);
// test4(3,4,5);

}

// Template literals and Multiple line String <-------------------
{
// using backticks u are able to print multi line string <------------

// console.log(`Mohan  
// Krishna
// Kanha
// Gopal`);

// let d = 43;

// console.log('i scored ' + d);
// console.log(`my score is ${d}`);
}

// Destructuring <------Arrays----------
{
// The destructuring assignment syntax is a  JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

let arr1 = ['jai', 'hind', , 'i', 'am', 'Prashant'];

// if we want to access elements we do use indexes like below
{
    let s = arr1[2];
    // console.log(s);
}
// but by using destructuring concept what we can do is 
let [p, q, r, s, t, e] = arr1;
// console.log(p,q,r,s,t);
// console.log(e);
// console.log(r);

// Array is symbolised with square brackets while objects are symbolised with curlybrackets 
}

// Destructuring <------Objects----------
{
let myObj = {
    Name: 'Krishna',
    address: 'Gokul',
    gender: 'Male',

    country: {
        city: 'Mathura',
        anothorOne: 'biraj'
    }
}

// in object destructuring we have to put same key name in order to access destructre them

// let {Name,address,gender} = myObj; // if we want to give any alternate name to the key then that can also give like as below
// console.log(Name,address,gender);
// let {Name:n,address:A,gender:G, country:{city:cty}} = myObj; 
// console.log(n,A,G,cty);

}

// Modules And Modularity <-----------------
{
// modularity means is to divide our code in diff-diff module and use them accordingly instead of using them in main file 
// example <---------
// we have on calcy file which we have export from there and import in our main file this is known as modularity 
const calculator = require('./calcy');
// calculator.division(3,2);
}

// mcq <---------------
{
// What is the final value of obj in the following example? 

const obj = { foo: 1 }
obj.bar = 2
// console.log(obj);

// What is the output of the following code? mcq <---------------

console.log(typeof (new (class { class () {} })));//??????????//object
}

// Functional Programming <------------------------
{
// imperative and declarative way of writing ur code <-------------------
{
// we will given a number and we have to check whether the square of the number is even or not 

// Imperative way of writing code  <------------
// in imperative way u mostly focuses upon a prcedure like in the below code , where we have to set isEven to false then writing function and reseting the value and all the things..<-----------
isEven = false;

// console.log(evenOdd(5));

function evenOdd(num) {

    if ((num * num) % 2 == 0) return isEven = true;
    return false;
}

// Declarative way of writing code <------------
// In declrative way we try to write the code in as much as in concise order like in below code we did <---------------

const checkForSquare = (x) => (x * x % 2 == 0 ? true : false);
// console.log(checkForSquare(11));

}

// Pure Function <--------------------------
// A pure function is a function which :
// Given the same input , always returns the same output.
// Produces no side effects 



// impure function <-------------
{ 
    // in the below code we can see that we have one exterenal factor due to which the values changing continuously this is known as 'impure function' <-------------
    let extra = 1;
    function sum(x, y) {
        // console.log(x+y+extra++);
    }
    sum(2, 3);
    sum(2, 3);
    sum(2, 3);
    sum(2, 3);
}

// pure function <---------- same input returns  same output
{
    function sum(x, y) {
        // console.log(x+y); // but still it is not pure function because we are using console.log to print out value
        // our function work should only be , to do sum and nothing else so in stead of this we should return sum; like below
        return x + y; // pure function <-------------
    }
    // console.log(sum(4,2));
    // console.log(sum(4,2));
    // console.log(sum(4,2));
    // console.log(sum(4,2));
    // console.log(sum(4,2));

}

// What are Callback Function <-------------------
{
// In JavaScript , a callback function is a function that is passed into another function as an argument . This function can then be invoked at a later stage of Time.
// Since in js functions are objects functions can be passed as arguments 

    function printFirstName(firstName, callBack) {
        // console.log(firstName);
        callBack("Maviya")
    }
    printFirstName('Mohan', printLastName);


    function printLastName(lastName) {
        // console.log(lastName);
    }
    // printLastName('Malviya');

    const isEven = (n) => {
        return n % 2 == 0;
    }
    let printResult = (evenFn, num) => {
        const isNumEven = evenFn(num);

        // console.log(`The number ${num} is an EvenNumber ? ${isNumEven}`);
    }
    printResult(isEven, 41);

}


// What is Higher Order Function <-----------
{
// Higher Order functions are functions that operate on other functions,eithr by taking them as arguments or by returning them.In simple words A Higher - order function is a function that receives a function as an argument or returns the function as output. 
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i] * arr[i];

    // console.log(arr);

    const num = [1, 2, 3, 4, 5];
    const squaredNum = num.map(function (n) {
        return n * n;
    })

    // console.log(squaredNum);

    // map will loop through, every element of your array and will perform specific operation that u have provided 
    // Map method will always return u a new array with ur results<------------


    const transactions = [200, 421, 1000, 5000, 2222, 5];
    // const dollarToINR = transactions.map(function(n){
    //     return n*81.75;
    // })
    // const dollarToINR = transactions.map((amount)=>{//using arrow function <--------------------
    //     return amount*81.75.toFixed(2);//tofixed() method fixes values upto to specific possition
    // })

    // console.log(dollarToINR);

    const dollarToINR = transactions.forEach((amount) => {//using 'foreach' method instead of 'map' method <-------------------- but like 'map' method it won't returns any array it just return elements after the code execution
        // console.log( amount*81.75.toFixed(2) ) ;
    })

    // console.log(dollarToINR); <--it shows undefined due to not returning anything

}

// Find method () <-------------------
{
    // find returns the first element of an array that satisfy the condition 
    // const transactions = [4000,2000,421,1000,5000,2222,5];
    // let maxWithdrown = transactions.find((dollar)=>{
    //     return dollar > 1000;
    // })
    // console.log(maxWithdrown);

    // instead of finding the number if we wanted to find 'index' then we can use 'findIndex()' method <----------------------

    const transactions = [4000, 2000, 421, 1000, 5000, 2222, 5];
    let maxWithdrownIndex = transactions.findIndex((dollar) => {
        return dollar > 4000;
    })
    // console.log(maxWithdrownIndex);
}


// Some method And every() method <------------------------
{
    // Some Condtition Check :  To get true or false based on a condition
    //it will return true if even 1 element setisfies the condition

    const transactions = [4000, 2000, 421, 1000, 5000, 2222, 5];

    // let withdrown = transactions.some((dollar) =>{
    //     return dollar < 0;
    // })

    // console.log(withdrown);

    // Every method <-----------------
    // every element should satisfy the condition to return true 


    let withdrown = transactions.every((dollar) => {
        return dollar > 0;
    })

    // console.log(withdrown);
}

// Filter Method <------------
{

    // choose even numbers from an array and put them in seprate array 

    let arr = [2,3,4,5,6,2,1,33,23];
    let evenArr = [];

    //imperativ way <------------------
    for(let i =0;i<arr.length;i++)
        if(arr[i]%2==0) evenArr.push(arr[i]);

    // console.log(evenArr);

    // filter method ? <---------------- ?
    // filter Returns a new array, it will return all those elements that matches the specific condtion 
    //  if the condition is true it will return the element for that condition  and if it is false it will discard the element ;

    // let  evenArr = arr.filter((evenNum)=>{
    //     return evenNum % 2 == 0;
    // })

    // console.log(evenArr);


    // check for negative and use filter method for that : problem for u <------------
    // let arr = [-2, -2, 2, -4, 5, 6, 2, -66];
    // let negativNum = arr.filter((negative) => {
    //     return negative < 0;
    // })

    // console.log(negativNum);

}

// Reduce method <----------------------
{
    // basic problem : you have to find the sum of every element in an arr
    let arr = [1, 2, 3, 4, 5, 6, 7];
    // let sum = 0;
    // for(let i=0;i<arr.length;i++){
    //     sum += arr[i];
    //     // arr[i] = arr[i]+arr[i+1];
    // }

    // console.log(arr);
    // console.log(sum);

    // Reduce Method <-------------

    // it returns single value for the given condition like below

    let sumOfNumbers = arr.reduce((sum, value) => {
        sum += value;
        return sum;
    }, 0)

    // console.log(sumOfNumbers);
}

// chaining methods <---------------
{

    let arr = [
        { name: 'A', age: 14, gender: 'M' },
        { name: 'B', age: 40, gender: 'F' },
        { name: 'A', age: 34, gender: 'F' },
        { name: 'A', age: 15, gender: 'M' },
        { name: 'A', age: 16, gender: 'F' },
        { name: 'A', age: 19, gender: 'M' }
    ]

    // now if we want to access all the males from the arr then 
    // let male = arr.filter((males)=>{
    //     return males.gender == 'M';
    // })

    // console.log(male);

    // now if we want to find ages of males then 

    // let agesOfMales = male.map((age)=>{
    //     return age.age;
    // })

    // console.log(agesOfMales);

    // but now by using chaining method we can do both tasks simultaniously <------------------

    // let male = arr.filter((males)=>{ // chaining <-------------
    //     return males.gender == 'M';
    // }).map((age)=>{
    //     return age.age;
    // })

    // console.log(male);

    // you have an array find possitive elements and find tatal of possitives
    let numArr = [1, -2, 3, -4, 5, 6, -6, -7];

    let totalOfPossitive = numArr.filter((possitives) => {
        return possitives > 0;
    }).reduce((sum, value) => {
        return sum += value;
    }, 0);

    // console.log(totalOfPossitive);
}

// mcq for u<----------------
{
    
    let sum = 0;
    let arr = [10, 15, 20, 30];
    arr.forEach(function myFunction(element) { sum = sum + element; });
    // console.log(sum);
}
}


// Object Oriented Programming <---------------------
{
{ // What is OOPS in Js <--------------------
    // Object-oriented programming (oop) is a computer programming model that organizes software design around data or objects rather than functions and logic . An object can be dfined as a data field that has unique attribute and behavior

    // The four Pillars Of OOPS are -
    // Encapsulation, Abstraction, Polymorphism, Inheritance

    // OOPs Module -
    // 1. This Keyword
    // 2. Constructor Functions 
    // 3. Classes // ES6 start
    // 4. Classical Inheritance 
    // 5. Encapsulation 
    // 6. Polymorphism 
    // 7. Prototype Object 
    // 8. Prototypal Inheritance 
    // 9. Call Apply Bind 
}

// 1. This Keyword <------------------
{
    // types of mod strict and non strict <--------------------??
{
    // Js runs in two environment ie js runtime environment known as Node.js and another one is Browser
    // Two Modes are ther 
    // 1. Non Strict Mode<--------- And another one is 
    // 2. Strict mode<----------

    // when we write something like 
    // a variable without defining it we will call it non strict mode ie see below

    // a = 2;
    // console.log(a);

    let a = 2;
    // console.log(a);

    // but when we use 'use strict' at the top most of our js file then it won't be execute <------------
}

// ------------> Node.js Non Strict Mode <---------------
{
    // console.log(this); // o/p:{};empty object | empty curly brackets

    // function displayThis(){
    // console.log(this)
    // }

    // displayThis();

    // so when we are using 'this' keyword inside a function it is refer to --------> global object <------------------


    // inside object 'this' keyword 
    // let insideObjThis = {
    //     name : 'krishna',
    //     age : 20,
    //     fn : function(){
    //         // console.log(this);
    //         console.log(this.age);
    //     }
    // }

    // insideObjThis.fn();

    // when inside the object fn we use 'this' keyword it refers to that object only 

    // object ---> function ---> function ---> this keyword ????????????


    // let insideObjThis = {
    //     name: 'krishna',
    //     age: 20,
    //     fn: function () {
    //         // console.log(this);
    //         function myfn() {
    //             console.log(this);
    //         }
    //         myfn();
    //     }
    // }

    // insideObjThis.fn();

    //   ----------->  This way this keyword works with 'Node js' 'Non strict Mode' <------------

    // object ---> function ---> function ---> this keyword ????? --> global object 

    // so in brief 
    // 1 console.log(this) --> {} empty object
    // 2. function --> global object
    // 3. object --> fn --> object itself
    // 4. object --> fn --> fn --> global object
}

// Node js with 'strict mode' <------------------------
{

    // nJsWithStrictMode.js file <------- see in this file
    // so in brief 
    // 1 console.log(this) --> {} empty object
    // 2. function --> undefined
    // 3. object --> fn --> object itself
    // 4. object --> fn --> fn --> undefined

}

// This keyword in Browser in both scenarios 'Strict and Non Strict Mode';
{

    // Refer --> thisKeywordInBrowser.js inside thisInBrowser.html <---------------------

    // With Non Strict Mode in Browser

    // so in brief 
    // 1 console.log(this) --> window object
    // 2. function --> window object
    // 3. object --> fn --> object itself
    // 4. object --> fn --> fn --> window object


    // With 'use strict' Strict Mode in Browser <---------

    // so in brief 
    // 1 console.log(this) --> window object
    // 2. function --> undefined
    // 3. object --> fn --> object itself
    // 4. object --> fn --> fn --> undefined
}

}

// 2. ----------> Constructor in js <-----------------
{
    // Constructors are kind of template for an object that can we use for replaceing repetative work which means by using that constructor we can make multiple objects

    function createCar(_name, _company, _color) {
        this.name = _name;
        this.company = _company;
        this.color = _color;

        this.drive = function () {
            console.log(`I am driving ${this.name} car  of ${this.color} color`);
        }
    }

    let car1 = new createCar('X4', 'BMW', 'Red');
    // console.log(car1);

    let car2 = new createCar('s-class', 'Mercedes', 'Black');
    // car2.drive();

    // console.log(car2);

}


// 3. Classes <---------------------------
{
    class Person {
        constructor(_name, _age) {
            this.name = _name;
            this.age = _age;
        }

        welcome() { // in class we can directly creat method without even write function keyword just like this
            console.log(`welcome ${this.name}.`);
        }
    }

    let Person1 = new Person('Mohan', 20);
    // console.log(Person1);
    // Person1.welcome();
    let Person2 = new Person('Krishna', 20);
    // console.log(Person2);

}

// 4. Classical Inheritance In Js <--------------------
{

    // there are two type of inheritance in JS 
    // 1. Classical Inheritance 
    // 2. Prototypal Inheritance 

    // 1. Classical Inheritance 
    // Methods and properties from base class can be put down or can be passed into derived class 

    class person {
        constructor(_name, _age) {
            this.name = _name;
            this.age = _age;
        }

        // we can also extend method from the class like below
        welcome() {
            console.log(`Welcome ${this.name}.`)
        }

    }
    class teacher extends person {

        constructor(_name, _age, _classStrength) {
            super(_name, _age);
            this.classStringth = _classStrength;
        }

    }
    class student extends person {
        constructor(_name, _age, _cgpa) {
            super(_name, _age);
            this.cgpa = _cgpa;
        }
        test() {
            super.welcome();
        }
    }

    // let p1 = new person('Mohan',20);
    // console.log(p1);

    let t1 = new teacher('Ganesh', 23, 74);
    // console.log(t1);

    let s1 = new student('krishna', 23, 10);
    // console.log(s1);
    // s1.test();
}

//  6.  Polymorphism <---------------------------
{
    // Poly --> many
    // morph --> forms
    // ism --> method / behavior

    class Animal {

        sound() {
            console.log("Animals Make different sounds");
        }
    }

    class Dog {

        sound() {
            console.log("Dog Barks");
        }
    }

    class Cat {

        sound() {
            console.log("Cat Mews");
        }
    }

    let a1 = new Animal();
    let d = new Dog();
    let c = new Cat();
    // d.sound();
    // c.sound();
}

// 5. Encapsulation <-------------------
{
    // it means to hiding the data 

    function person1(_name, _age) {
        var name = _name;
        this.age = _age;

        this.getName = function () {
            return name;
        }
    }
    let p1 = new person1('shyam', 23);
    // console.log(p1);
    p1.age = 22;
    // console.log(p1.getName());
}

// 7. 8 . Prototype and Prototypal Inheritance <-------------
{

    // A prototype object is a object that gets linked with ur object by default and u can use any methods of protype object 

    // find programs in --------------> 'prototype.js' file and prototype.html file

}

// 9. call apply and bind method <-----------------
{
    // Call <------------- Apply And --------> Bind Method <-------------------

    let person1 = {
        firstName: 'Ram',
        lastName: 'Malviya',
        age: 23,


    }

    let printDetails = function (city, quote) {
        console.log(`Hi, I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city} city and ${quote}`)
    }

    // person1.printDetails();


    let person2 = {
        firstName: 'Lakhan',
        lastName: 'Malviya',
        age: 21,

        // printDetails : function(){
        //     console.log(`Hi, I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
        // }
    }


    // person2.printDetails();

    // call method <------------------------
    // it basicaly borrow method for another object like as below but in case of global function we call directly use that method<-----------------
    // printDetails.call(person2, 'Bhopal', 'I believe on Myself');

    // Apply() Method <---------------------------

    // In apply method we just need to put argument in an array like as below 

    // printDetails.apply(person2, ['Bhopal', 'I believe on Myself']);     


    // Bind Mehod <-------------------
    // it actually allow u store the function in different variable and use them later stage of time 

    let myFun = printDetails.bind(person2, ['Bhopal', 'I believe on Myself']);

    // console.log(myFun);

    // myFun();

}
}
    // mcq for u <-------------------------
{
    // function Person(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //    }
    //    const member = new Person('Lydia', 'Hallie');
    //    Person.getFullName = function() {

    //    return `${this.firstName} ${this.lastName}`;

    //    };
    //    console.log(member.getFullName());


    // mcq for u <-----------------

    // function Person(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     }
    //     const lydia = new Person('Lydia', 'Hallie');
    //     const sarah = Person('Sarah', 'Smith');
    //     console.log(lydia);
    //     console.log(sarah);

    // mcq for u <----------------------------
    const shape = {
        radius: 10,
        diameter() {
            return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
    };

    //    console.log(shape.diameter());
    //    console.log(shape.perimeter());

}


