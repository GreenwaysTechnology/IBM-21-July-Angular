//step 1 : declare decorator

//target is the variable holding reference of Student Object
// function Course(target: any) {
//     //logic
//     Object.defineProperty(target.prototype, "subject", {
//         value: 'Angular'
//     })
// }

function Course(courseInfo: any) {
    return function (target: any) {
        //logic
        Object.defineProperty(target.prototype, "subject", {
            value: courseInfo
        })
    }
}
//step 2 :use the decorator
type StudentType = {
    firstName: string;
    lastName: string;
    subject: string;
}
// @Course('React')
@Course({
    name: 'Angular',
    code: 'UI-001',
    duration: 40
})
class Student {
    constructor(public firstName: string, public lastName: string) { }
}
// let student = new Student("Subramaian", "Murugan") as StudentType;
let student = new Student("Subramaian", "Murugan") as any;

console.log(`${student.firstName} ${student.lastName} is learning ${student.subject.name} ${student.subject.code} `);