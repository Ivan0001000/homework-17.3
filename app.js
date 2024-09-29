class BankAccount {

    constructor(initialBalance) {
        this.balance = initialBalance; 
    }

    getBalance() {
        return this.balance; 
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Сума внесення повинна бути більшою за 0.");
        }
        this.balance += amount; 
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Сума зняття повинна бути більшою за 0.");
        }
        if (amount > this.balance) {
            throw new Error("Недостатньо коштів на рахунку.");
        }
        this.balance -= amount; 
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);
console.log(account1.getBalance()); 

account1.withdraw(200);
console.log(account1.getBalance()); 
