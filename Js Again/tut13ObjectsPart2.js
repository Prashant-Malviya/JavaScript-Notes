// singleton object 

// const tinderUser = new Object();// o/p is same but it is singleton object
const tinderUser = {};// but it is not
// console.log(tinderUser);

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : 'a@gmail.com',
    fullName: {
        userfullName : {
            firstName : 'prashant',
            lastName : 'malviya'
        }
    }
}

console.log(regularUser.fullName.userfullName.lastName)
// console.log(regularUser)

const obj1 = {
    1 : 'a',
    2 : 'b',
}
const obj2 = {
    3 : 'd',
    4 : 'c'
}
// const obj3 = {obj1, obj2}
// const obj3  = Object.assign({},obj1,obj2)  

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3)

const users = [
    {
        id: 1,
        email : 'p@gmail.com'
    },
    {
        id: 1,
        email : 'p@gmail.com'
    },
    {
        id: 1,
        email : 'p@gmail.com'
    },
    {
        id: 1,
        email : 'p@gmail.com'
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // used for converting the key and values of object into the array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


