

class Employee {
    //instance variables:hardcoded init
    firstName: string = "Subramanian";
    lastName: string = "Murugan"
    salary: number = 100;
    isValid: boolean = true;
    //instance methods
    calculateSalary(noofOfdays: number): number {
        return noofOfdays * this.salary
    }
}
//object 
//emp is reference variable
//new is keyword
//Employee() -  constructor call
let emp = new Employee();
console.log(emp);
emp.firstName = "ram"
emp.lastName = "m"
console.log(emp.firstName, emp.lastName)
console.log(emp.calculateSalary(100))

//constructors

class Product {
    id: number;
    name: string;
    price: number;
    qty:number;
    constructor(id: number = 0, name: string = "", price: number = 0,qty?:number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}
let product = new Product();
console.log(product);

product = new Product(12,"books",1000);
console.log(product);