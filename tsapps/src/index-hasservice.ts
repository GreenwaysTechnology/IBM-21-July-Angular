class OrderService {
    constructor() {

    }
    public findAll(): string {
        return 'Orders'
    }
    public save() {
        return 'order saved'
    }
}
class OrderControler {
    constructor(private orderService: OrderService) { }

    public fetch() {
        return this.orderService.findAll();
    }
    public save(){
        return this.orderService.save()
    }
}

function main() {
    let orderControler = new OrderControler(new OrderService());
    console.log(orderControler.fetch())
    console.log(orderControler.save())
}
main()