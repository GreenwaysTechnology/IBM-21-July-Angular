"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var order_mock_1 = require("../mock-data/order.mock");
var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    OrderService.prototype.findAll = function () {
        return order_mock_1.ORDERS;
    };
    return OrderService;
}());
exports.OrderService = OrderService;
