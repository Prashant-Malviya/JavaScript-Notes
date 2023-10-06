function square(num){
    return num*num;
}

square.power = 2

// console.log(square(2));
// console.log(square.power);
// console.log(square.prototype);


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const mobile = new createUser('mobile',23)
mobile.increament();
mobile.printMe();