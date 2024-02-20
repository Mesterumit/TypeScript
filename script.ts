// Type annotation  " : "
// var message : string = "Hllo world"

// Dta types

// String, number, boolean, null, undifined, any ,Array, void


//string
 const message : string = "Hello world"
 console.log(message)
 // number
 const age : number = 30;
 console.log(age)
 // boolean
 const isLogged : boolean = true;
 console.log(isLogged)



 // ARRAYS

 // array is a collection of values. Array types can be written in one of two ways
 // in the first , you use the type of the elements followed by "[]" to
 // denote an array of that element type

 let list : number[] = [1,2,3];

 // the second way uses a "generic" array type, Array<elementType>

 let list2 : Array<number> = [1,2,3]


 // ANY
 let anyVar : any = "Hello";
 anyVar =20;
 anyVar = true;
 console.log(anyVar)

 // never
 const error =(message:string): never =>{
    throw new Error(message)
 }

 // TUPLES
 
//  TUPLE TYPES ALLOW YOU TO EXPRESS AN ARRAY WITH A FIXED NUMBER OF ELEMEMNTS WHOSE TYPES are know , but need not be the same
//  Exam, you may want to represent a value as a pair of a string and a number
 
 // declare a tuple type
 let x : [string, number] = ["hello", 20]
 
 // initialize it
//  x = [“hi”, 10 ];  // OK
 
 // initialize it incorrectly 
//  x= [10,”hello”];    // Error


// TUPLE array

var employee :[number,string][] ;
employee =[[1,"Steve"],[2,"Bill"],[3,"Jefff"]];


// Adding elements into tuple 

// Example : push()
employee.push([4,"Bill"]);
console.log(employee);  // Output [ [1,”Steve”],[2,”Bill”],[3,"Jeff"],[4,"Bill"] ]



// Enum

// a helpful addition to the standard set of data types from js is the enum. An enum is a way of giving more friendly names to sets of numeric values
// By default, enums being numbering their members starting at  “ 0 “. You can change this by manually setting the value that may contain both string and numeric values.

enum  Color {
     Red,
     Green,
     Blue,
  }
let selectedColor : Color = Color.Green;
console.log(selectedColor)  // output: 1


// TYPE Alias
type MyType = string | number;
const typeAliasFunction =(arg:MyType) : MyType =>{
   return arg;
}
console.log("---------TYPE AlIAS-----------");
console.log(typeAliasFunction('Hello'));
console.log(typeAliasFunction(20));

type MyType2 ={
   name: string;
   age: number;
}
// so i can't add another variable inside of it, such as location' 
// because i have only two "variables , name and age"
const David : MyType2 ={
   name: 'Umit',
   age: 31,
   // location: 'Boston'
}



// Type Alies with Union

// String literals allow us to use a string as a type
// String literals become even more powerful when used with unions types. Union types are used to define values that can be of more than one type. 
// With union types, the “ | “ character is used to separate the different possible types

type pet = 'cat' |  'dog'

let pet1 : pet = 'cat'
let pet2 : pet ='dog'
// let umit : pet = 'gerbil' // error






