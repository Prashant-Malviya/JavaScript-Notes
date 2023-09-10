function sayMyName(){
    console.log('prashant')
    console.log('malviya')
}
// sayMyName // known as refrence 
// sayMyName() // known as execute or execution

// function addTwoNumbers(number1,number2){ // when do definition of function that time it is known as paramenters
//     console.log(number1+number2)
// }
// addTwoNumbers(2.3,23); // but when we execute it, then it is known as arguments

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(2,3);
// console.log(result);

function loginUserMessage(userName){
    if(!userName){
        console.log('please enter a username');
        return;
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("prashant"));
// console.log(loginUserMessage());//undefined

function calculateCartPrice(val1,val2,...num1){ // known as rest operators
    return num1;
}
// console.log(calculateCartPrice(2,3,2,1,3,));

const user = {
    userName : 'prashant',
    price : 200
}

function handelObject(anyObj){
    console.log(`username is ${anyObj.userName} and the price added in cart is ${anyObj.price}`);
}

// handelObject(user)

// handelObject({
//     userName: "krishna",
//     price : 300
// })

const myNewArray = [2,3,2,5,2,1]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([3,2,4,5]))





