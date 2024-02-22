// TS Generic is a tool which provides a way to create reusable
// components (functions, interfaces and classes)

// Generics in ts is almost similar to "C#" generics

// A generic type has one or more generic type parameters 
// in angle brackets.
// e.g : <T> OR <T,U> using uppercase single letter is a convention

// When using generic types, we should suppyly arguments for generic type
// parameters or let the compiler infer them (if possible)


// PROBLEM
function getArray(items:any[]): any[]{
    return new Array().concat(items)
}

let numArr = getArray([1,2,3])
let strArr = getArray(['Jhon','Jane'])
numArr.push(4) // OK
strArr.push('Jake') // OK
numArr.push('Tim'); // OK
strArr.push(5) // OK
console.log(numArr); // [1,2,3,4,'Tim']
console.log(strArr); // ['Jhon','Jane','Jake',5]

// SOLUTION
function getArray2<T>(items: T[]): T[]{
    return new Array<T>().concat(items)
}
let numArr2 = getArray2([1,2,3])
let strArr2 = getArray2(['Umit','Mester'])
strArr2.push('ORDU') // OK
numArr2.push(4)  // OK
// strArr2.push(2) // Compiler Error, becaus etype of "strArr2" is string
// numArr2.push('Fatsa') // Compiler Error, because type of "numArr2" is  number

//GENERIC INTERFACE
console.log("======= GENERIC  INTERFACE======")
interface Result<T>{
    data : T | null
}

// Generic function
console.log("======= GENERIC  FUNCTION======")
function wrapInArr<T>(value: T){
    return [value]
}

let arr = wrapInArr(1)

// Generic Classes
console.log("======= GENERIC  CLASSES======")

class KeyValuePair<K,V> {
    constructor(public key: K, public value: V){}
}
let kvp2 = new KeyValuePair<number, string>(1,'a')
let shorter = new KeyValuePair(1,'a')

console.log("=======MULTIPLE GENERIC======")
// Multiple generic parameter example

function displayType<T, U>(param1:T, param2:U){
    console.log(`param1: ${typeof(param1)}, param2: ${typeof(param2)}`);
}

displayType<number, string>(34, 'Boston'); // param1:number, param2:string
displayType<string,number>('Price', 100); // param1:string, param2:number
displayType(console.log, 5>8) // param1:function, param2:boolen

// single parameter with non-generic
console.log("=======Single GENERIC======")

function displayType2<T>(param2 :T, param3:string){
    console.log(`param2 : ${typeof(param2)}, param3: ${typeof(param3)}`)
}
displayType2<number>(34,'Boson');
// displayType2<string>('Boson',20); // Compile Error 
displayType2(console.log, "5>8");


// GENERICS CONSTRAINTS

// we can constrain generic type arguments by using the "extends"
// keyword after type parameters. T extends Person or T

function echo<T extends number | string>(value:T){}

// T can restrict the object as string
function echo2<T extends {name:string}>(value: T){}

// T restric an interface or class
function echo3<T extends {name:string}>(value: T){}

// passing on generis type parameters
// class CompressibleStore<T> extends Store<T>{}

// Consrtaining generic type parameters 
// class SearchableStore<T extends {name: string}> extends Store2<T>{}

// Fixing generic type parameters
// class ProductStore extends Store3<Product> {}

// The "keyof" operator helps by producing a union of the keys of the given object.
// we can constain parameters of a function to be only in given list, no new property

interface Product {
    name: string;
    price: number;
}

let property : keyof Product ;
// same as
let property2 : 'name' | 'price'
property= 'name';
property = 'price';
// property = 'otherValue'; // Invalid

interface Product2 {
    name:string;
    price:number;
}
function update1<T extends object, K extends keyof T>
            (obj:T, prop:K, newValue: T[K]){
                //
            }
  const product3: Product2 = {name:'Headphones', price:50}
//   update1(product3 ,'Price','Powerbank');
//   update1(product3, 'Count',5);


// Type Mapping

type ReadOnly<T> = {
    readonly [K in keyof T] : T[K];
};

type Optinal<T> = {
     [K in keyof T]? : T[K];
};

type Nullable<T> = {
     [K in keyof T]? : T[K] | null;
};


// Utility Types

interface Product6 {
    id: number;
    name: string;
    price: number;
}

// A product where all properties are optinal
let product: Partial<Product6>;

// A product where all properties are required
let product2: Required<Product6>;

// A product where all properties are read-only
let product4 : ReadOnly<Product6>;

// A product withd two properties only (id and price)
let product5 : Pick<Product6, "id" | "price">;

// A product without a name
let product7 : Omit<CSSMathProduct, 'name' >;

// ADVANTAGE OF GENERIC

// type-safety : only a single type of objects in generic. it doesn't allow to store other objects
// Typecasting is not required : no need to typecast the object
// Compile-Time Checking : checked at compile time so prevents the problem at runtime
