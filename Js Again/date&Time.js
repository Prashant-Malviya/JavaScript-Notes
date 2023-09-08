let mydate = new Date();
// console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());


console.log(typeof mydate);


// let myCreatedDate = new Date(2023,0,23,3,2,2);
let myCreatedDate = new Date("01-01-2023");
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)


let a = newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(a);