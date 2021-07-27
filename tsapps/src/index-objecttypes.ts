//literal objects

// class Order {
//     id: number
//     value: number;
//     name: string;
// }

// interface Order {
//     id: number
//     value: number;
//     name: string;
// }

type Order = {
    id: number
    value: number;
    name: string;
}

let order: Order = {
    id: 1,
    value: 1000,
    name: 'books'
};

console.log(order.id, order.value, order.name)
/////////////////////////////////////////////////////////////////////////////////////

type Employee = {
    id: number;
    name: string;
    city?: string;
    salary?: number;
    department?: string;
}

let emp:Employee =  {
    id:1,
    name:'Subramanian'
}

class Product {
    id: number;
    name: string;
    price?: number;
    qty?: number;
}


let products: Array<Product> = [
    { id: 1, name: 'a1', price: 100, qty: 23 },
    { id: 2, name: 'a2', price: 100, qty: 23 },
    { id: 3, name: 'a3', price: 100, qty: 23 },
    { id: 4, name: 'a4', price: 100, qty: 23 },
    { id: 5, name: 'a5', price: 100, qty: 23 }

];
let products1: Product[] = [
    { id: 1, name: 'a1'},
    { id: 2, name: 'a2', price: 100, qty: 23 },
    { id: 3, name: 'a3', price: 100, qty: 23 },
    { id: 4, name: 'a4', price: 100, qty: 23 },
    { id: 5, name: 'a5', price: 100, qty: 23 }
];