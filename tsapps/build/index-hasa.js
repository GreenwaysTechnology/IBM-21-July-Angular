//has-a and dependency injection
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    return Product;
}());
var Order = /** @class */ (function () {
    //order has  product
    function Order(orderid, vaule, product) {
        this.orderid = orderid;
        this.vaule = vaule;
        this.product = product;
    }
    return Order;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var product = new Product(1, "phone");
var order = new Order(23, 1000, product);
console.log(order);
order = new Order(12, 3400, new Product(12, "Books"));
console.log(order);
// order = new Order(12, 3400, new Employee())
// console.log(order);
