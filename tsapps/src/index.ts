import { OrderService } from "./services/order.service";


function main(){
    let orderService = new OrderService();
    console.log(orderService.findAll())
}
main()