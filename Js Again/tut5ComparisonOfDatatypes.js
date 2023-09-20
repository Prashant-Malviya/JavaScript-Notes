// prefrably not to such type of conversion

console.log('2' > 1); // js automatically converts to number
console.log("02" > 1);
console.log(22 > '20');

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true;

// The reason ie that an equality check == and comparions > < and >= and <= work differently 
// Comparion convert null to a number , treating it as  0;
// that's why the output is different 

console.log(undefined == 0); // always gives false for rest other comparision that mentioned above


// strict check === check the datatype as well
console.log(2 === 2);