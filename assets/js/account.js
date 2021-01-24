balance = 0;

const account = {
    balance: 0,
    withdraw (amount) {
        if (amount < balance) {
            balance -= amount;
            return [true, `Succesfully Withdrawn ${amount}`];
        } 
        return [false, "You don't have enough balance!"];
    },
    deposit (amount) {
        balance += amount;
        return `Succesfully deposited ${amount}`;
    },
    checkBalance () {
        return balance;
    },
    transfer (amount, to) {
        let check = this.withdraw(amount);
        if (check[0]) {
            return `Succesfully transfered ${amount} to account number ${to}`;
        }

        return check[1];
    },
}