function greet(){
    console.log('hi from setInterval');
}

let timer = setInterval(greet,1000);

// since till now we haven't  set any condition for set interval function so it'll continously running. To stop this let us set the condition for this 

setInterval(()=>{
    clearInterval(timer)
},5000);

// setInterval is also a asynchronous function 