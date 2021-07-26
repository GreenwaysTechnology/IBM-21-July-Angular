let price; //undefined
let qty; //undefined

let totalPrice = price * qty;
console.log(`Total price ${totalPrice}`)
//type conversion

//implicit conversion : conversion is taken automatically

let a:any ="10"; // a is string but value is 10
let b = 100; // a is number and value is 100
let c = a * b;
console.log(c);
//Explicit conversion
let d =  parseFloat(a) * b;
console.log(c);

//Explicit conversion using  + operator
//+a means here convert a's string value into number
let f =  +a * b;
console.log(f);

//NaN and type conversion

let myvar:any="$10"; //NaN because $ is special character.
let res= myvar *100;
console.log(res);
