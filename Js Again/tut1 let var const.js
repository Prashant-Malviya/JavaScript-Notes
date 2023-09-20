const accountId = 12434;
let accountEmail = 'prashant@gmail.com';
var accountPassword = '1234';
accountCity = 'Bhopal';
let accountState;

// accountId not allowed 

accountEmail = 'malviya@gmail.com';
accountCity = 'Indore';
accountPassword = 1353;

console.log(accountEmail);
console.table([accountEmail,accountPassword,accountCity,accountState]);

// var is not function scoped or block scopped while let is both 
// when we declare variable only then it would be consider as undefined;