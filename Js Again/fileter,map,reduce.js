const coding = ['js','ruby','java','py','cpp'];


// const values = coding.forEach((item) =>{
//     // console.log(item)
//     return item;
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => num > 5) // it will return the values since we are using parenthesis// filter is use for taking the values by satifying the condition
const newNums = myNums.filter((num) => { // it won't return values since we are not using parenthesis we are braces that is scope{} , so to return values we need to right explicitely return.
    // num > 5 it won't 
   return  num > 5 // it wil.
})

// console.log(newNums);

const newNum = [];

myNums.forEach((num) =>{
    if(num > 5)
        newNum.push(num);
})
// console.log(newNum);



let books = [
    {title: 'b1', genre: 'history', publish: '1980',edition: '1'},
    {title: 'b2', genre: 'history', publish: '1981',edition: '2'},
    {title: 'b3', genre: 'geogaphy', publish: '1983',edition: '3'},
    {title: 'b4', genre: 'science', publish: '1985',edition: '5'},
    {title: 'b6', genre: 'social science', publish: '2000',edition: '6'},
    {title: 'b2', genre: 'history', publish: '1981',edition: '2'},
    {title: 'b3', genre: 'geogaphy', publish: '1983',edition: '3'},
    {title: 'b4', genre: 'science', publish: '1985',edition: '5'},
    {title: 'b6', genre: 'social science', publish: '2000',edition: '6'},
    {title: 'b8', genre: 'mathematics', publish: '2020',edition: '17'},
    {title: 'b10', genre: 'computer Science', publish: '2023',edition: '6'},
    {title: 'b11', genre: 'Bharat', publish: '2023',edition: '1'},
]

let userBooks = books.filter((bk) => bk.genre === 'history')

userBooks = books.filter((bk) => {return bk.publish >= 2000}) // when we open scope then explicitely write return

userBooks = books.filter((bk) => bk.edition === '6')
// console.log(userBooks);
 


// ==========================>>>>>>>>>>>>>>> map function --> map function is callback function used to return the values which satisfy the condition


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNumbers = myNumbers.map( (num) => num + 10)
console.log(newNumbers);

// +++++++++++++++++++++++++ chainig method

const newNumbers2 = myNumbers
             .map((num) => num * 10)
             .filter((num) => num >= 90 )
             .map((num) => num + 10)

// console.log(newNumbers2)


// ++++++++++++++++++++++ reduce method 
const myNumbers2 = [1,2,3];

// const myTotal = myNumbers2.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} and currVal : ${currVal}`)
//     return acc + currVal;
// }, 4)

const myTotal = myNumbers2.reduce( (acc,curr) => acc+curr, 5);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js cours',
        price : 2999
    },
    {
        itemName : 'java cours',
        price : 3999
    },
    {
        itemName : 'pythone cours',
        price : 4999
    },
    {
        itemName : 'dataScience cours',
        price : 7799
    },
]

const priceTotal = shoppingCart.reduce( (acc,productPrice) => acc + productPrice.price, 0)
// console.log(priceTotal);




