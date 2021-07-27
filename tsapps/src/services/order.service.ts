import { Order } from "../types/order.type";
import { ORDERS } from "../mock-data/order.mock";


export class OrderService {
    constructor() { }
    public findAll(): Array<Order> {
        return ORDERS;
    }
}