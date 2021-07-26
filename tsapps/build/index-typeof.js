//type of operator
var firstName = "Subramanian";
var lastName = 'Murugan';
//console.log("First Name" + firstName);
console.log("First Name " + firstName + " " + lastName);
var title = 'IBM';
var htmlPage = "\n    <html>\n      <head>\n       <title>\n          " + title + "\n       </title>\n     </head>\n     <body>\n      <h1>Welcome</h1>\n     </body>\n     </html>\n";
console.log(htmlPage);
//Numbers 
var a = 100;
var b = 200;
//booleans 
var isValid = true;
var isEnabled = false;
//undefined
var price;
var qty;
console.log("price " + price + " " + qty);
//NaN ; it is error code , will come during numerical computation
var totalPrice = price * 1000;
console.log("Total Price " + totalPrice);
//type conversion
var count = "$10"; //string
var totalCount = parseInt(count) * 10;
console.log(totalCount);
//infinity
//div by 0
var newprice = 1000;
var avgPrice = newprice / 0;
//Avg Price Infinity
console.log("Avg Price " + avgPrice);
//typeof operator ; tells the type of variable
console.log("First Name Type " + typeof firstName); // string
console.log("a Type " + typeof a); // number
console.log("totalPrice(NaN) " + typeof totalPrice); // number
console.log("avgPrice(Infinity) " + typeof avgPrice); // number
console.log("isValid Type " + typeof isValid); // boolean
console.log("price(undefined) " + typeof price); // undefined
