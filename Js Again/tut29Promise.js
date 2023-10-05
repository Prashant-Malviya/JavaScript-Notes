// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // db calls, crptography, network
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'prashant', email:'p@gmail.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'prashant', password: '123'})
        }else{
            reject('ERROR : js Went Wrong')
        }
    }, 1000);
})

const username = promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected'))

console.log(username);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'javascript', password: '123'})
        }else{
            reject('ERROR : Something Went Wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}