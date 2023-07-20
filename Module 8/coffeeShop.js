function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink == 'coffee') resolve('Order for Coffee recieved');
        else reject('Other orders Rejected');
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being Processed');
        resolve(`${order} And is Served`);
    })
}

// chaining method with promises;

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then(function(processOrder){
//     console.log(processOrder);
// }).catch(function(err){
//     console.log('error.......');
// })


async function serveOrder(){
    try {

        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
        
    } catch (error) {
        console.log(error);
    }
}

// serveOrder();

// mcq for u <------------------------

// What is the output of the given code?

// const firstPromise = new Promise((res, rej) => {
//  setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//  setTimeout(res, 100, 'two');
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


// mcq <----------------

// What is the output of the given code?

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//  myPromise().then(res => console.log(res));
//  console.log('second');
// }

// async function secondFunction() {
//  console.log(await myPromise());
//  console.log('second');
// }

// firstFunction();
// secondFunction();

// mcq <--------------------
// What will be the output of the above code?

// var p = new Promise((resolve, reject) => {
// reject(Error('Promise Fails!'))
// })
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))


// mcq <--------------------------

// What is the output of the following code?

// async function f() {
//  let result = 'new!';
//  let promise = new Promise((resolve, reject) => {
//  setTimeout(() => resolve('done!'), 1000);
//  });
// result = await promise;
// console.log(result);
// }

// f();