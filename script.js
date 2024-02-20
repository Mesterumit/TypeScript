"use strict";
// Type annotation  " : "
// var message : string = "Hllo world"
// Dta types
// String, number, boolean, null, undifined, any ,Array, void
//string
const message = "Hello world";
console.log(message);
// number
const age = 30;
console.log(age);
// boolean
const isLogged = true;
console.log(isLogged);
// ARRAYS
// array is a collection of values. Array types can be written in one of two ways
// in the first , you use the type of the elements followed by "[]" to
// denote an array of that element type
let list = [1, 2, 3];
// the second way uses a "generic" array type, Array<elementType>
let list2 = [1, 2, 3];
// ANY
let anyVar = "Hello";
anyVar = 20;
anyVar = true;
console.log(anyVar);
// never
const error = (message) => {
    throw new Error(message);
};
// TUPLES
//  TUPLE TYPES ALLOW YOU TO EXPRESS AN ARRAY WITH A FIXED NUMBER OF ELEMEMNTS WHOSE TYPES are know , but need not be the same
//  Exam, you may want to represent a value as a pair of a string and a number
// declare a tuple type
let x = ["hello", 20];
// initialize it
//  x = [“hi”, 10 ];  // OK
// initialize it incorrectly 
//  x= [10,”hello”];    // Error
// TUPLE array
var employee;
employee = [[1, "Steve"], [2, "Bill"], [3, "Jefff"]];
// Adding elements into tuple 
// Example : push()
employee.push([4, "Bill"]);
console.log(employee); // Output [ [1,”Steve”],[2,”Bill”],[3,"Jeff"],[4,"Bill"] ]
// Enum
// a helpful addition to the standard set of data types from js is the enum. An enum is a way of giving more friendly names to sets of numeric values
// By default, enums being numbering their members starting at  “ 0 “. You can change this by manually setting the value that may contain both string and numeric values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Green;
console.log(selectedColor); // output: 1
