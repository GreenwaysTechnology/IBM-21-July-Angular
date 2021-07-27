
//arrays

//without generics
let list: number[] = [1, 2, 3, 4, 5];

//with generics
let names: Array<string> = ["a", "b", "c"];
console.log(list)
console.log(names)


//List of employees
class Employee {
    id: number;
    name: string;
}
let empList: Array<Employee> = [{ id: 1, name: 'a' }, { id:2, name: 'b' }];
console.log(empList)