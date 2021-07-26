//

function sayHello() {
    console.log('hello')
}
sayHello();

//anonmous function : es5
let hai = function (name: string = 'foo') {
    console.log('Hai', name)
};
hai()
//arrow functions : es 6
hai = (name: string = 'foo') => {
    console.log('Hai', name)
};
hai()
//if function body has one line of code,we can remove {}
hai = (name: string = 'foo') => console.log('Hai', name);
hai()
//arrow with return
let add = (a: number = 0, b: number = 0):number => {
    return a + b;
}
console.log(add(10, 10));

//if function body has only return statement, we can remove {} and return statement

add = (a: number = 0, b: number = 0): number => a + b;

console.log(add(10, 10));