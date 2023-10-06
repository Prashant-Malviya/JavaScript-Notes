// const user = {
//     username : 'prashant',
//     loginCount : 9,
//     signedIN : true,

//     getUserDetails : function(){
//         // console.log("Got  use details");
//         console.log(this);// current context
//         console.log(`Username : ${this.username}`);
//     }
// }

// // console.log(user);
// console.log(user.getUserDetails());
// console.log(this);// {}

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

// const userOne = User('prashant',12,true);
// const userTwo = User('Mohan',32,false);//overwrites to userOne
// console.log(userOne);

const userOne = new User('prashant',12,true);
const userTwo =  new User('Mohan',32,false);

// console.log(userOne);
// console.log(userTwo);

console.log(userTwo.constructor);
