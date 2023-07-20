// how to produce promise <--------

let myPromise = new Promise(function(resolve,reject){

    const a = 4;
    const b = 0;

    setTimeout(()=>{
        if(a==b) resolve('The values are equal');
        else reject('The values were not equal');
    },2000)
})


// pending stage 
// console.log(myPromise);

// fulfilled --> use then() <----method

myPromise.then(function(result){
    console.log(result);
})


// rejected state catched by catch method from reject method above;
myPromise.catch(function(failedResult){
    console.log(failedResult);
})