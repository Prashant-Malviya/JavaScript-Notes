// spread operator {...} <---------

let firstPerson = {
    name : 'krishna',
    age : 21,

    address : {
        city : 'mathura',
        state : 'UP'
    }
}

let secondPerson ={...firstPerson}; // this is known
// as shallow copy in which first property can be changed but not other nested property

secondPerson.name = 'mohan';

secondPerson.address.city = 'gokul'; // it will reflect changes in both objects firstPerson And also in secondPerson;

console.log(firstPerson);
console.log(secondPerson);