const fs = require('fs'); // this is basically a file system module from node js which helps u file handly kind of stuff..

console.log('Before ........');

// let data = fs.readFileSync('f1.txt');

// readFileSync() this method actually read fle synchronously which means one file at a time <---------- and it is knows as synchronous programming in js <-----------------

// console.log('file 1 data --> ' + data);


// let data2 = fs.readFileSync('f2.txt');

// console.log('file 2 data --> ' + data);

// fs.readFile('f1.txt',cb1);

// fs.readFile() this method reads file ansyncronously it won't wait for long file to execute it execute files simultaneously 

// this is known as asyncronous programing in js <-----------

// function cb1(err, data){
//     if(err) console.log(err);

//     console.log('file 1 data --> ' + data);
// }


// fs.readFile('f2.txt',cb2);

// function cb2(err, data){
//     if(err) console.log(err);

//     console.log('file 2 data --> ' + data);
// }

// console.log('after...........');


// // in js there are some methods which are asynchronous and some which are synchronous

// // serial execution of asynchronous code <----------------

// fs.readFile('f3.txt',cb3);

// function cb3(err, data){
//     if(err) console.log(err);

//     console.log('file 3 data --> ' + data);
// }

// console.log('after...........');

// serial execution of asynchronous code <----------------

fs.readFile('f1.txt',cb1);

function cb1(err, data){
    if(err) console.log(err);

    console.log('file 1 data --> ' + data);

    fs.readFile('f2.txt',cb2);
}




function cb2(err, data){
    if(err) console.log(err);

    console.log('file 2 data --> ' + data);

    fs.readFile('f3.txt',cb3);
}

console.log('after...........');


// in js there are some methods which are asynchronous and some which are synchronous




function cb3(err, data){
    if(err) console.log(err);

    console.log('file 3 data --> ' + data);
}

console.log('after...........');