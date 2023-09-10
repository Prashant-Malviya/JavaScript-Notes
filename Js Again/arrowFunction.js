const user = { // this keyword refers current context
    userName : 'prashant',
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "mohan";
// user.welcomeMessage()

// console.log(this); // in node environment it is empty object
// while in browser it is refer to window object 

function chai(){
    let userName = 'prashant'
    // console.log(this);
    console.log(this.userName);//it is not print this it gives undefined 
}

// chai();

// const computer = function(){
//     let userName = 'krishna';
//     console.log(this.userName); // this is also print undefined
// }


const computer = () => {
    let userName = 'krishna';
    console.log(this);
}
 
// computer();

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

// const addTwo = (num1,num2) =>  (num1+num2); // known as implicit return 

const addTwo = (num1,num2) =>  ({userName : 'prashant'});

console.log(addTwo(2,3));





