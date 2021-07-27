//concrete class inheritance

interface Calculator {
    calculate(): number; // method declaration
}

abstract class Account implements Calculator {
    constructor() {
        console.log('account class')
    }
    protected deposit() {
        return 100;
    }
    public calculate(): number {
        return 2000;
    }
    public abstract withdraw():number;
}
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('Savings account class')
    }
    public deposit() {
        return 1000 * super.deposit();
    }
    public withdraw():number{
         return 999;
    }
}
let sb = new SavingsAccount();
console.log(sb.deposit())
console.log(sb.calculate())
console.log(sb.withdraw())