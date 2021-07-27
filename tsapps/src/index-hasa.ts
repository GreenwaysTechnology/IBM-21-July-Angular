//has-a and dependency injection

class Product {
    constructor(public id: number, public name: string) { }
}

class Order {
    //order has  product
    constructor(public orderid: number, public vaule: number, public product: Product) { }
}

class Employee {}

let product = new Product(1, "phone")
let order = new Order(23, 1000, product);
console.log(order);

order = new Order(12, 3400, new Product(12, "Books"))
console.log(order);


// order = new Order(12, 3400, new Employee())
// console.log(order);