

// class can include the following 

// constructor 
// properties
// methods

 // an object of the class can be created using the new keyword
 // while instanting a new object the class constructor is called with the valus passed

 class Employee {
    empCode : number;
    empName : string;
    constructor( code : number, name:string){
        this.empCode = code;
        this.empName = name;
    }
    print(){
        console.log(this.empCode, this.empName)
    }
 }

 let emp = new Employee(100, 'Jhon');
 emp.print()
 console.log(emp)

 // functionalities are passed down to classes
 // objects are created from classes


 // Classes -Inheritance 

 // classes can inherit using the keyword "extends"

 // the employee class now includes all the members of the person class
 // the constructor of the employee class is using a special keyword super
 // and intialises its own properties

 // we must call "super()" method first before assigning values to properties in the
 // constructor of child class

 class Person{
    name: string;
    constructor(name:string){
        this.name = name
    }
 }

 class Employee2 extends Person {
    empCode: number;
    constructor(code: number, name: string){
        super(name);
        this.empCode = code
    }
 
 displayName(): void {
    console.log(this.name , this.empCode)
 }
}

//Abstract Classes

// ts allows us to define an abstract class using keyword "abstract"
// abstract classes are mainly for defining structure of class, where there are no
// implementation code. Therefore, they can't be intstantiated.

// abstract class typically includes one or more abstract methods or property declerations.
// The child class must define all the abstract methods

// we can thinks as absract methdos/properties are a placeholder that will be defined when it is inherited.

// decleration :( left side of teh equal sign)

// assigmnet/definition : (right side of the equal sign)

// child of an abstarct class must call super() in the constructor

// person is an abstract class has one property and two methods.
// "displayCode()" method is an abstract method and so must be defined in the derived class

// the employee class should define implenttaion code for the "displayCode()" method

// the employee class should implement all the abstract methods of the Person class, 
// otherwise the compiler will give an error
console.log("=======ABSTRACT====")
abstract class Person2 {
    name: string;
    constructor(name:string){
        this.name = name
    }

displayName():void{
    console.log(this.name)
}
abstract displayCode():void;

}

class Employee3 extends Person2{
    empCode: number;
    constructor(code: number , name:string){
        super(name);
        this.empCode = code
    } 
    // i have to have "displayCode()" method from parent abstract method
    displayCode(): void{
        console.log(this.empCode)
    }

}
const e = new Employee3(20,'Umit')
e.displayName()


// Class Data Modifiers

// in object-oriented programing , the concept of "encapsulation" is used
// to make class members public or private

// class can control the visibilityof its data members. This is done using access modifiers

// There are three types of access modifiers in typscript

//  PUBLIC
//  PRIVATE
//  PROTECTED

// By DEFAULT , all members of class in Typescript are public . All the public mmebers can be 
// accessed anywhere without any restrictions

// private access modifier ensures that class members are visible only
// to that class and are not accessible outside the containing class

// when we create an object "emp" and try to access the "emp.empCode" member
// it will give an error

class Employee4 {
    private empCode : number;
    empName : string;

    constructor(empCode : number, name : string){
        this.empCode = empCode;
        this.empName = name;
    }
}

let em = new Employee4(100,'Faruk')
// console.log(em.empCode) // compiler error because it is private


//PROTECTED MODIFIER

// child class can't access "private" methods/properties
// However, child class can access protected memebers

// in this example, "DevelopmentEmployee" class can't access
//  "id" in the parent class.
// However, it can reach public and protected properties

// outside the class, we can recah "empName"
// but we can't reach "department"
console.log("=======Protected======")
class Employee5 {
    // Protected is only accessible within the class and its subclasses
    public empName :string;
    protected empCode: number;
    private id = Math.random();
    constructor(empCode: number, name:string){
        this.empCode = empCode;
        this.empName = name
    }
    getEmpin():number{
        return this.id
    }
}

class DevelopmentEmployee extends Employee5{
    private department : string;

    constructor(code: number, name: string, dep:string){
        super(code, name);
        this.department = dep;
        // this.id = 100 // Compiler Error. Private tp parent
    }
}

let emp2 = new DevelopmentEmployee(100,"Jhon","Backend")
// console.log(emp2.department) // compiler error 
console.log(emp2.getEmpin())


// REadonly Modifier

// in adition to the access modifiers, typescript provider two more keywords: read-nly and static
// Prefix read-only is used to amek a property as read only

class Employee6 {
    empName : string;
    readonly empCode : number;

    constructor(empCode : number, name : string){
        this.empCode = empCode;
        this.empName = name;
    }
}

let emp3 = new Employee6(100, 'Umit')
// emp3.empCode = 20 // Compiler error


// STATIC MODIFIER

// static members of a class are accessed using the class name
// and dt nottaion, without creating an object

// static members can be defined by using the keyword static

// circle class includes a static property and a static method

// we can call these methods and properties directly from the class

class Circle {
    static pi : number = 3.14;

    static calcArea(radius:number){
        return this.pi * radius * radius
    }
}
// static method can be called without instantiating the class
Circle.pi; // returns 3.14
Circle.calcArea(5) // returns 78.5

class car {
    make : string;
    model : string;
    constructor(make:string , model:string){
        this.make = make;
        this.model = model;
    }
    static createCar(make:string, model:string){
        return new car(make,model)
    }
}

const myCar = car.createCar('Toyota','Rav4');
// we can also create a new car
const myCar2 = new car('Toyota','Camry')
console.log(myCar2)


console.log("====iNTERFACE=======")
// INTERFACES

// iterface is structure that defines the "contact".
// It defines the syntax for classes to follow.
// Class must follow the derived interface structure.

// the TS compiler doesn't convert interface to JS.
// just for type checking. "duck typing" or "structural subtyping"

// an interface is defined with the keyword interface
// it can only include properties and method declarations

// No implementation

interface Calendar{
    events : string[];
    addEvent(event:string) : void;
}

class LmsCalendar implements Calendar{
    events : string [];
    constructor(event:string[]){
        this.events =event;
    }
    addEvent(event: string): void {
        this.events.push(event)
    }
}
const e2 = new LmsCalendar(['Umit'])
console.log(e2)
console.log("====iNTERFACE Employee=======")
interface IEmployee{

    empSalary : number;
    empName : string;
    setSalary(salary:number) : void;
    getName(empName:string) : string;
}

class IEmployee1 implements IEmployee{
    empSalary: number;
    empName: string;
    emCity : string;
    constructor(code: number, name: string, city: string){
        this.empName = name;
        this.empSalary = code;
        this.emCity = city
    }
    setSalary(salary: number): void {
        this.empSalary = salary;
        console.log('Salary changed to : ' + this.empSalary)
    }
    getSalary(empSalary:number):number{
        return this.empSalary;
    }
    getName(empName: string): string {
        return empName
    }
    // this is a method that is not defined in the interface
    // we can add things to classes that imlement interfaces,
    // but we can't add things to interfaces that we aren't including in our classes 
   getCity(emCity: string):string{
    return emCity
   }
}

const dude = new IEmployee1(1,"Umit",'Boston')
dude.setSalary(20)
console.log(dude)

// INTERFACES VS TYPE ALIASES

// interfaces and type aliases can be used interchangeably.
// Both can be used to describe the shape of an object

// Interface can only be used for object and classses


// type aliases
type Person3 ={
    name: string;
}
let umit: Person3={
    name:'Umit'
}

interface Point {
    x: number;
}

interface Point {
    y: number;
}

let point: Point = {
    x:1,
    y:2
}

console.log(point)

// tring this with type:
// if i try to use "Point1" and add onather variable 
// it is not gonna wotk, it will say duplicate identifier

type Point1 ={
    x:number
}
type Point2 ={
    y:number
}
type Point1_2 = Point1 & Point2
// type Point1_2{x:number, y:number}

// INTERfaces can only cotain declaration of properties and methods
// no value or no implementtaion details are allowed

// A class can implement more than one interface,
// but can only implement one super class

interface Color2{
    color :{
        r:number,
        g:number,
        b:number
    }
}

interface Shape {
    area : number;
}

class ParentClass{
    name:string;
    constructor(name:string){
        this.name = name
    }
}
// extending a parent class and implementing multiple interfaces
class Square extends ParentClass implements Color2,Shape {
    color :{r:number, g:number, b:number}
    area : number;
    constructor(
        c:{r:number, g:number, b:number},
        a:number,
        name:string  )
        {
            super(name)
            this.color = c;
            this.area = a;
        }
}

// INTERFACES AS FUNCTION TYPE

// we can define function type using interface ,
//  to assign a function a variable , 
// TS can enforce specific function

console.log("=======INTERFACE AS FUNCTION TYPE=====")
interface NumKey{
    (key: number, value:string) : void
}

function addKeyVal(k:number, v:string) : void{
    console.log("Adding key value ", k, v)
}

function update(index: number, newVal:string) : void{
    console.log("updating key value", index, newVal)
}

let kvp : NumKey = addKeyVal;
kvp(1,"Umit")
kvp = update
kvp(2,"Mester")