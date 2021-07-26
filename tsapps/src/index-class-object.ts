

class Employee {
    //instance variables
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
console.log(emp.firstName,emp.lastName)
console.log(emp.calculateSalary(100))