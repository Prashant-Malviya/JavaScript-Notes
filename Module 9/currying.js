function sum(x,y){
    console.log(x+y);
}

// sum(4,2);


function sumCurrried(x){
    return function(y){
        console.log(x+y);
    }
}

let sumOfTwoNumbers = sumCurrried(4);
sumOfTwoNumbers(28);