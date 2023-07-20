{
let myObje = {};
// console.log(myObje);

let p1 = {
    Name : 'kartike',
    age : 23
}

// console.log(p1);

// console.log(p1.hasOwnProperty('Name')); // this hasOwnProperty() method actually tell whether the object holding that perticular property or not ie exist or not

// constructor function <------------------
// function person(_name,_age){
//     this.name = _name;
//     this.age = _age;
// }
// let p2 = new person("indra",23);
// console.log(p2);

}

{
    // constructor function
    function person(_name,_age){
        this.name = _name;
        this.age = _age;

        // this.getNameAndAge = function(){
        //     console.log(`I am ${this.name} and my age is ${this.age}.`)
        // }
    
    }
    person.prototype.getNameAndAge = function(){
        console.log(`I am ${this.name} and my age is ${this.age}.`)
    }

    let p1 = new person('gopal',12);
    let p2 = new person('shiv',53);

    console.log(p1.getNameAndAge());
    console.log(p2.getNameAndAge());


}

