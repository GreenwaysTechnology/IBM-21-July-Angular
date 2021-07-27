//name is arg
function sayGreet(name) {
    console.log("Hello " + name);
}
//Subramanian is parameter
sayGreet('Subramanian');
//here we pass value 100, based on value type, type inference is enabled.
sayGreet(100);
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello('Subramanian');
//sayHello(1000) //error
//default args : es 6 feature
function multiply(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    var c = a * b;
    console.log("Multiply " + c);
}
multiply(10, 20);
multiply();
//optional args
function setValues(name, age, city) {
    console.log("name : " + name + " age:" + age + " city :" + city);
}
setValues('Subramanian', 41, 'Coimbatore');
setValues();
function setStocks(name, price, qty) {
    if (price === void 0) { price = 0; }
    console.log("name : " + name + " price:" + price + " qty :" + qty);
}
setStocks('google');
///////////////////////////////////////////////////////////////////////////////////
//Union type
function printId(id) {
    console.log(id);
}
printId(1);
printId("10");
// printId(true); //error
function printIds(id) {
    //narrowing
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}
printIds(1000);
printIds("abc");
function welcomePeople(x) {
    //narrowing
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian");
welcomePeople(['subu', 'ram']);
