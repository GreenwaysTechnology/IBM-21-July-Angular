//null and undefined
class Employee {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
let emp = null;
//Safe TYpe navigation Operator ,which will convert error into readable string value
console.log(emp?.id ? emp.id : 0);

function printEmployee(emp) {
    // if (emp !== null) {
    //     console.log(emp.name);
    // }
    console.log(emp?.id)
}

let emp1 = null;
printEmployee(emp1);