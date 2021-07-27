//
function sayHello() {
    console.log('hello');
}
sayHello();
//anonmous function : es5
var hai = function (name) {
    if (name === void 0) { name = 'foo'; }
    console.log('Hai', name);
};
hai();
//arrow functions : es 6
hai = function (name) {
    if (name === void 0) { name = 'foo'; }
    console.log('Hai', name);
};
hai();
//if function body has one line of code,we can remove {}
hai = function (name) {
    if (name === void 0) { name = 'foo'; }
    return console.log('Hai', name);
};
hai();
//arrow with return
var add = function (a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
};
console.log(add(10, 10));
//if function body has only return statement, we can remove {} and return statement
add = function (a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
};
console.log(add(10, 10));
