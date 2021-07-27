var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    OrderService.prototype.findAll = function () {
        return 'Orders';
    };
    OrderService.prototype.save = function () {
        return 'order saved';
    };
    return OrderService;
}());
var OrderControler = /** @class */ (function () {
    function OrderControler(orderService) {
        this.orderService = orderService;
    }
    OrderControler.prototype.fetch = function () {
        return this.orderService.findAll();
    };
    OrderControler.prototype.save = function () {
        return this.orderService.save();
    };
    return OrderControler;
}());
function main() {
    var orderControler = new OrderControler(new OrderService());
    console.log(orderControler.fetch());
    console.log(orderControler.save());
}
main();
