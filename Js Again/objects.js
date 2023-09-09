// singleton 
// Object.create

// object literals 

// const mySym = Symbol();
const mySym = Symbol('key1');

const jsUser = {
    // mySym : 'mykey1', // not right way to use symbol
    [mySym] : 'mykey1',
    'fullName' : 'prashant',
    age : 18,
    location: 'indore',
    'email': 'p@gmail.com',
    isLoggedIn: false,
    lastLoginDay: ['monday','saturday']
}

// we can access object values by dot and square brackets 

// console.log(jsUser.isLoggedIn) //dot
// console.log(jsUser['email']) // bracket
// console.log(jsUser['fullName'])
// console.log(jsUser['mySym']);
// console.log(typeof jsUser['mySym']);

jsUser.email = 'm@gmail.com';
// Object.freeze(jsUser);
jsUser.email = 'prashant@gmail.com';
// console.log(jsUser);

jsUser.greeting = function(){
    console.log('hi js user')
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`hi js greetingtwo user, ${this.fullName}`)
}
console.log(jsUser.greetingTwo())



