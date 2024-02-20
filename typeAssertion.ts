// TYpe Assertions

// Type assertion is a technique that informs the compiler about the type of a variable
// it is similar to tyoecasting but it doesnt reconstruct code

// type assertion allows us to override typescript
// and treat a variable as a diffirent type than it was
// originally declared as

// let someValue : unknown = 'this is a string ';
// console.log(someValue.length) // Object is type of "Unknown"

let someValue1 : unknown ='This is a string';
console.log((<string>someValue1).length) // 16

let someValue2 : unknown ='This is a string';
console.log((someValue2 as string).length) // 16