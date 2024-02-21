// class can include the following 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// constructor 
// properties
// methods
// an object of the class can be created using the new keyword
// while instanting a new object the class constructor is called with the valus passed
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.print = function () {
        console.log(this.empCode, this.empName);
    };
    return Employee;
}());
var emp = new Employee(100, 'Jhon');
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(code, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    Employee2.prototype.displayName = function () {
        console.log(this.name, this.empCode);
    };
    return Employee2;
}(Person));
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
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.displayName = function () {
        console.log(this.name);
    };
    return Person2;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(code, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    // i have to have "displayCode()" method from parent abstract method
    Employee3.prototype.displayCode = function () {
        console.log(this.empCode);
    };
    return Employee3;
}(Person2));
var e = new Employee3(20, 'Umit');
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
var Employee4 = /** @class */ (function () {
    function Employee4(empCode, name) {
        this.empCode = empCode;
        this.empName = name;
    }
    return Employee4;
}());
var em = new Employee4(100, 'Faruk');
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
var Employee5 = /** @class */ (function () {
    function Employee5(empCode, name) {
        this.id = Math.random();
        this.empCode = empCode;
        this.empName = name;
    }
    Employee5.prototype.getEmpin = function () {
        return this.id;
    };
    return Employee5;
}());
var DevelopmentEmployee = /** @class */ (function (_super) {
    __extends(DevelopmentEmployee, _super);
    function DevelopmentEmployee(code, name, dep) {
        var _this = _super.call(this, code, name) || this;
        _this.department = dep;
        return _this;
        // this.id = 100 // Compiler Error. Private tp parent
    }
    return DevelopmentEmployee;
}(Employee5));
var emp2 = new DevelopmentEmployee(100, "Jhon", "Backend");
// console.log(emp2.department) // compiler error 
console.log(emp2.getEmpin());
