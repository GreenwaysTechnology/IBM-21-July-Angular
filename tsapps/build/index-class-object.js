var Employee = /** @class */ (function () {
    function Employee() {
        //instance variables
        this.firstName = "Subramanian";
        this.lastName = "Murugan";
        this.salary = 100;
        this.isValid = true;
    }
    //instance methods
    Employee.prototype.calculateSalary = function (noofOfdays) {
        return noofOfdays * this.salary;
    };
    return Employee;
}());
//object 
//emp is reference variable
//new is keyword
//Employee() -  constructor call
var emp = new Employee();
console.log(emp);
console.log(emp.firstName, emp.lastName);
console.log(emp.calculateSalary(100));
