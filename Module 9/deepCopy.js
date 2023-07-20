let firstPerson = {
    name : 'krishna',
    age : 21,

    address : {
        city : 'mathura',
        state : 'UP'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson)); // whenever we call this line of statement it creates a seprate reference for our object <-------------------- known as Deep copy <-------------

secondPerson.address.city = 'gokul';

console.log(firstPerson);
console.log(secondPerson);