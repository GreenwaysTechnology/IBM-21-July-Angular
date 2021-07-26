var price; //undefined
var qty; //undefined
var totalPrice = price * qty;
console.log("Total price " + totalPrice);
//type conversion
//implicit conversion : conversion is taken automatically
var a = "10"; // a is string but value is 10
var b = 100; // a is number and value is 100
var c = a * b;
console.log(c);
//Explicit conversion
var d = parseFloat(a) * b;
console.log(c);
//Explicit conversion using  + operator
//+a means here convert a's string value into number
var f = +a * b;
console.log(f);
//NaN and type conversion
var myvar = "$10"; //NaN because $ is special character.
var res = myvar * 100;
console.log(res);
