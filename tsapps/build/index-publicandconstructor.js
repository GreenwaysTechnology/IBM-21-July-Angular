// class Employee {
//     //instance variables
//     id: number;
//     name: string;
//     //id,name is local variable
//     constructor(id: number, name: string) {
//         //instancevariable:localvariable
//         this.id = id;
//         this.name = name;
//     }
// }
//how to reduce code using public and private modifer
// class Employee {
//     constructor(public id: number, public name: string) {
//         //instancevariable:instancevariable
//         this.id = id;
//         this.name = name;
//     }
// }
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    return Employee;
}());
var emp = new Employee(1, 'ram');
console.log("id : " + emp.id + " name " + emp.name);
