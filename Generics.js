"use strict";
// TS Generic is a tool which provides a way to create reusable
// components (functions, interfaces and classes)
// Generics in ts is almost similar to "C#" generics
// A generic type has one or more generic type parameters 
// in angle brackets.
// e.g : <T> OR <T,U> using uppercase single letter is a convention
// When using generic types, we should suppyly arguments for generic type
// parameters or let the compiler infer them (if possible)
// PROBLEM
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3]);
let strArr = getArray(['Jhon', 'Jane']);
numArr.push(4); // OK
strArr.push('Jake'); // OK
numArr.push('Tim'); // OK
strArr.push(5); // OK
console.log(numArr); // [1,2,3,4,'Tim']
console.log(strArr); // ['Jhon','Jane','Jake',5]
// SOLUTION
function getArray2(items) {
    return new Array().concat(items);
}
let numArr2 = getArray2([1, 2, 3]);
let strArr2 = getArray2(['Umit', 'Mester']);
strArr2.push('ORDU'); // OK
numArr2.push(4); // OK
// strArr2.push(2) // Compiler Error, becaus etype of "strArr2" is string
// numArr2.push('Fatsa') // Compiler Error, because type of "numArr2" is  number
//GENERIC INTERFACE
console.log("======= GENERIC  INTERFACE======");
// Generic function
console.log("======= GENERIC  FUNCTION======");
function wrapInArr(value) {
    return [value];
}
let arr = wrapInArr(1);
// Generic Classes
console.log("======= GENERIC  CLASSES======");
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let kvp2 = new KeyValuePair(1, 'a');
let shorter = new KeyValuePair(1, 'a');
console.log("=======MULTIPLE GENERIC======");
// Multiple generic parameter example
function displayType(param1, param2) {
    console.log(`param1: ${typeof (param1)}, param2: ${typeof (param2)}`);
}
displayType(34, 'Boston'); // param1:number, param2:string
displayType('Price', 100); // param1:string, param2:number
displayType(console.log, 5 > 8); // param1:function, param2:boolen
// single parameter with non-generic
console.log("=======Single GENERIC======");
function displayType2(param2, param3) {
    console.log(`param2 : ${typeof (param2)}, param3: ${typeof (param3)}`);
}
displayType2(34, 'Boson');
// displayType2<string>('Boson',20); // Compile Error 
displayType2(console.log, "5>8");
// GENERICS CONSTRAINTS
// we can constrain generic type arguments by using the "extends"
// keyword after type parameters. T extends Person or T
function echo(value) { }
// T can restrict the object as string
function echo2(value) { }
// T restric an interface or class
function echo3(value) { }
let property;
// same as
let property2;
property = 'name';
property = 'price';
function update1(obj, prop, newValue) {
    //
}
const product3 = { name: 'Headphones', price: 50 };
// A product where all properties are optinal
let product;
// A product where all properties are required
let product2;
// A product where all properties are read-only
let product4;
// A product withd two properties only (id and price)
let product5;
// A product without a name
let product7;
// ADVANTAGE OF GENERIC
// type-safety : only a single type of objects in generic. it doesn't allow to store other objects
// Typecasting is not required : no need to typecast the object
// Compile-Time Checking : checked at compile time so prevents the problem at runtime
