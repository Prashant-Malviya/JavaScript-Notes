// setTimeout(callBackFn(),second 2000);

console.log("first------");

function greet(){
    console.log("hellow from set time out function");
}

setTimeout(greet,2000);

// since set timeout function is work asynchronously if other tasks have less execution time then that will execute first <--------------------------

console.log('second---------')