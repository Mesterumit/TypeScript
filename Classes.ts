

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
 // the constuctor of the employee class is using a special keyword super
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