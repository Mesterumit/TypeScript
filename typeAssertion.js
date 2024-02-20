// TYpe Assertions
// Type assertion is a technique that informs the compiler about the type of a variable
// it is similar to tyoecasting but it doesnt reconstruct code
// you can use type asserton to specify a value type and tell the compiler not to deduce it
// when we want to change a variable from one type to another such as any to number 
// let someValue : unknown = 'this is a string ';
// console.log(someValue.length) // Object is type of "Unknown"
var someValue1 = 'This is a string';
console.log(someValue1.length); // 16
var someValue2 = 'This is a string';
console.log(someValue2.length); // 16
