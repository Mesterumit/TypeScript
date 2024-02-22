"use strict";
// functions should return type, and also function parameters should have types
// the compiler expects a function to recieve the exact number and type
// of arguments as defined in the function signature. For example, if a function expects 3 parameters,
// the compiler check whether 3 parameters exist with exact type or not
function Greet(greeting, name) {
    return greeting + " " + name + " !";
}
console.log(Greet('Hello', 'Umit')); // OK , retunrns "Hello Umit!"
// Greet('Hello') // Compiler Error , Expected 2 arguments, but got 1
// Greet('Hello', 'Umit','Mester') // Compiler Error, Expected 2 arguments, but got 3
const func = (num1, num2) => num1 + num2;
// in some cases, some of function parameters mat=y be optinal
// use the "?" SYMBOL AFTER THE PARAMETER name to make a function argument optinal
// All optinal parameters must follow required parameters and should be at the end
function Greet2(greeting, name) {
    return greeting + " " + name + " !";
}
console.log(Greet2('Hello', 'Umit')); // OK , retunrns "Hello Umit!"
console.log(Greet2('Hello')); // OK , retunrns " Umit undifened !"
// Greet2('Hello') // Compiler Error , Expected 2 arguments, but got 1
// Greet2('Hello', 'Umit','Mester') // Compiler Error, Expected 2 arguments, but got 3
// dont want to get a undifined if the name is not passed
function Greet3(greeting, name = '') {
    return greeting + " " + name + " !";
}
console.log(Greet3('Hello')); // OK , retunrns "Hello  !"
console.log("=======FUNCTION OVERLOADING======"); // OK , retunrns "Hello  !"
function add(a, b) {
    return a + b;
}
console.log(add("Hello", "Umit")); // returns "Hlleo Umit"
console.log((add(10, 20))); // returns 30
// Functions - Rest Parameters
// Typescript has rest parameters to accommodate "n" number of parameters easliy
// when the number of parameters is not known or can vary
// we can use rest parameters. 
// In JS , this is achived with the "arguments" variable. In typescript, we can use the rest parameter
// denoted by ellipsis . Rest parameters must come last in the function
// definition, otherwise the Typescript compiler will give an error
function Umit(a, ...names) {
    return a + " " + names.join(",") + "!";
}
console.log(Umit('Hlleo', "Faruk", "Bicek")); // returns "Hello Faruk, Bicek!"
console.log('Hello'); // returns "Hello !"
