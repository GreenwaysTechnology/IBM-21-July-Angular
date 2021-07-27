"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_service_1 = require("./services/order.service");
function main() {
    var orderService = new order_service_1.OrderService();
    console.log(orderService.findAll());
}
main();
