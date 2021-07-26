
//name is arg
function sayGreet(name) {
    console.log(`Hello ${name}`)
}
//Subramanian is parameter
sayGreet('Subramanian');
//here we pass value 100, based on value type, type inference is enabled.
sayGreet(100);

function sayHello(name: string) {
    console.log(`Hello ${name}`);
}
sayHello('Subramanian');
//sayHello(1000) //error

//default args : es 6 feature
function multiply(a: number = 0, b: number = 0) {
    let c = a * b;
    console.log(`Multiply ${c}`)
}
multiply(10, 20)
multiply();

//optional args
function setValues(name?: string, age?: number, city?: string) {
    console.log(`name : ${name} age:${age} city :${city}`)
}
setValues('Subramanian', 41, 'Coimbatore')
setValues()

function setStocks(name: string, price: number = 0, qty?: number) {
    console.log(`name : ${name} price:${price} qty :${qty}`)
}
setStocks('google');

///////////////////////////////////////////////////////////////////////////////////
//Union type

function printId(id: number | string) {
    console.log(id);
}
printId(1);
printId("10")
// printId(true); //error

function printIds(id: number | string) {
    //narrowing
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}

printIds(1000)
printIds("abc")

function welcomePeople(x: string[] | string) {
    //narrowing
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian")
welcomePeople(['subu','ram'])