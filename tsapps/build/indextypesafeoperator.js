//null and undefined
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    return Employee;
}());
var emp = null;
//Safe TYpe navigation Operator ,which will convert error into readable string value
console.log((emp === null || emp === void 0 ? void 0 : emp.id) ? emp.id : 0);
function printEmployee(emp) {
    // if (emp !== null) {
    //     console.log(emp.name);
    // }
    console.log(emp === null || emp === void 0 ? void 0 : emp.id);
}
var emp1 = null;
printEmployee(emp1);
