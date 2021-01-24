let account = {
    balance: 0,
    withdraw: function (amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            return true;
        } 
        return false;
    },
    deposit: function (amount) {
        this.balance += amount;
        return true;
    },
    checkBalance: function () {
        return this.balance;
    },
    transfer: function (amount, to) {
        if (this.withdraw(amount)) {
            return `Succesfully transferd ${amount}$ to ${to}!`;
        } 
        return "You don't have enough balance!"
    }

}