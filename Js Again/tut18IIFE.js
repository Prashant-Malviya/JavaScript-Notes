// we  use iife function to remove global scope polution and to imediately execute the function 

// below is named iife 
(function dbConnect(){ 
    console.log('DB connected');
})();

// note : - >> we need to put smicolon to use another IIFE function 

// below is simple iife 
// ( () => {
//     console.log('DB two connected');
// })()// this parenthesis executes it


( (name) => {
    console.log(`DB two connected dbname is ${name}`);
})('prashant')