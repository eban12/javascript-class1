(function () {
    function selectOperation() {
        let opt = prompt(`
        What do you want to do?
            1, to check balance
            2, to withdraw
            3, to transfer
            4, to deposit
        `);

        switch(opt) {
            case '1':
                console.log(helper(account.checkBalance));
                selectOperation();
                break;
            case '2':
                console.log(helper(account.withdraw)[1]);
                selectOperation();
                break;
            case '3':
                console.log(helper(account.transfer));
                selectOperation();
                break;
            case '4':
                console.log(helper(account.deposit));
                selectOperation();
                break;
            default:
                console.log("Wrong Option");
        }
    }
    
    function promptNumber(promptText) {
        return Number(prompt(promptText));
    }

    function helper(operator) {
        if (operator === account.checkBalance) {
            return operator()
        }

        let amount = promptNumber("Amount?");
        
        if (operator === account.transfer) {
            let transferAccount = promptNumber("account number to transfer to?");

            return account.transfer(amount, transferAccount);
        }

        return operator(amount);
    }

    selectOperation()
})()
