"use strict";
// class can include the following 
// constructor 
// properties
// methods
// an object of the class can be created using the new keyword
// while instanting a new object the class constructor is called with the valus passed
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    print() {
        console.log(this.empCode, this.empName);
    }
}
let emp = new Employee(100, 'Jhon');
emp.print();
console.log(emp);
// functionalities are passed down to classes
// objects are created from classes
// Classes -Inheritance 
// classes can inherit using the keyword "extends"
// the employee class now includes all the members of the person class
// the constructor of the employee class is using a special keyword super
// and intialises its own properties
// we must call "super()" method first before assigning values to properties in the
// constructor of child class
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee2 extends Person {
    constructor(code, name) {
        super(name);
        this.empCode = code;
    }
    displayName() {
        console.log(this.name, this.empCode);
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
console.log("=======ABSTRACT====");
class Person2 {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
}
class Employee3 extends Person2 {
    constructor(code, name) {
        super(name);
        this.empCode = code;
    }
    // i have to have "displayCode()" method from parent abstract method
    displayCode() {
        console.log(this.empCode);
    }
}
const e = new Employee3(20, 'Umit');
e.displayName();
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
    constructor(empCode, name) {
        this.empCode = empCode;
        this.empName = name;
    }
}
let em = new Employee4(100, 'Faruk');
// console.log(em.empCode) // compiler error because it is private
//PROTECTED MODIFIER
// child class can't access "private" methods/properties
// However, child class can access protected memebers
// in this example, "DevelopmentEmployee" class can't access
//  "id" in the parent class.
// However, it can reach public and protected properties
// outside the class, we can recah "empName"
// but we can't reach "department"
console.log("=======Protected======");
class Employee5 {
    constructor(empCode, name) {
        this.id = Math.random();
        this.empCode = empCode;
        this.empName = name;
    }
    getEmpin() {
        return this.id;
    }
}
class DevelopmentEmployee extends Employee5 {
    constructor(code, name, dep) {
        super(code, name);
        this.department = dep;
        // this.id = 100 // Compiler Error. Private tp parent
    }
}
let emp2 = new DevelopmentEmployee(100, "Jhon", "Backend");
// console.log(emp2.department) // compiler error 
console.log(emp2.getEmpin());
// REadonly Modifier
// in adition to the access modifiers, typescript provider two more keywords: read-nly and static
// Prefix read-only is used to amek a property as read only
class Employee6 {
    constructor(empCode, name) {
        this.empCode = empCode;
        this.empName = name;
    }
}
let emp3 = new Employee6(100, 'Umit');
// emp3.empCode = 20 // Compiler error
// STATIC MODIFIER
// static members of a class are accessed using the class name
// and dt nottaion, without creating an object
// static members can be defined by using the keyword static
// circle class includes a static property and a static method
// we can call these methods and properties directly from the class
class Circle {
    static calcArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
// static method can be called without instantiating the class
Circle.pi; // returns 3.14
Circle.calcArea(5); // returns 78.5
class car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    static createCar(make, model) {
        return new car(make, model);
    }
}
const myCar = car.createCar('Toyota', 'Rav4');
// we can also create a new car
const myCar2 = new car('Toyota', 'Camry');
console.log(myCar2);
console.log("====iNTERFACE=======");
class LmsCalendar {
    constructor(event) {
        this.events = event;
    }
    addEvent(event) {
        this.events.push(event);
    }
}
const e2 = new LmsCalendar(['Umit']);
console.log(e2);
console.log("====iNTERFACE Employee=======");
class IEmployee1 {
    constructor(code, name, city) {
        this.empName = name;
        this.empSalary = code;
        this.emCity = city;
    }
    setSalary(salary) {
        this.empSalary = salary;
        console.log('Salary changed to : ' + this.empSalary);
    }
    getSalary(empSalary) {
        return this.empSalary;
    }
    getName(empName) {
        return empName;
    }
    // this is a method that is not defined in the interface
    // we can add things to classes that imlement interfaces,
    // but we can't add things to interfaces that we aren't including in our classes 
    getCity(emCity) {
        return emCity;
    }
}
const dude = new IEmployee1(1, "Umit", 'Boston');
dude.setSalary(20);
console.log(dude);
let umit = {
    name: 'Umit'
};
let point = {
    x: 1,
    y: 2
};
console.log(point);
class ParentClass {
    constructor(name) {
        this.name = name;
    }
}
// extending a parent class and implementing multiple interfaces
class Square extends ParentClass {
    constructor(c, a, name) {
        super(name);
        this.color = c;
        this.area = a;
    }
}
// INTERFACES AS FUNCTION TYPE
// we can define function type using interface ,
//  to assign a function a variable , 
// TS can enforce specific function
console.log("=======INTERFACE AS FUNCTION TYPE=====");
function addKeyVal(k, v) {
    console.log("Adding key value ", k, v);
}
function update(index, newVal) {
    console.log("updating key value", index, newVal);
}
let kvp = addKeyVal;
kvp(1, "Umit");
kvp = update;
kvp(2, "Mester");
