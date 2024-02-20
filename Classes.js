// class can include the following 
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
