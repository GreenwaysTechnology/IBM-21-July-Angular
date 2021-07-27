var Employee = /** @class */ (function () {
    function Employee() {
        //instance variables:hardcoded init
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
emp.firstName = "ram";
emp.lastName = "m";
console.log(emp.firstName, emp.lastName);
console.log(emp.calculateSalary(100));
//constructors
var Product = /** @class */ (function () {
    function Product(id, name, price, qty) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (price === void 0) { price = 0; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    return Product;
}());
var product = new Product();
console.log(product);
product = new Product(12, "books", 1000);
console.log(product);
