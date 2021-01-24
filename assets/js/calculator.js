let calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
};


(function () {
    function selectOperation() {
        let opt = prompt(`
        What do you want to do?
            1, for addition
            2, for subtraction
            3, for multiplication
            4, for division
        `);

        switch(opt) {
            case '1':
                console.log(helper(calculator.add));
                break;
            case '2':
                console.log(helper(calculator.sub));
                break;
            case '3':
                console.log(helper(calculator.mult));
                break;
            case '4':
                console.log(helper(calculator.divide));
                break;
            default:
                console.log("Wrong Option");
        }
    }
    
    function promptNumber(promptText) {
        return Number(prompt(promptText));
    }

    function helper(operator) {
        
        if (operator === calculator.add || operator === calculator.mult) {
            let total = operator === calculator.mult ? 1 : 0;
            let howManyNumbers = promptNumber("How many numbers?");
            let operands = [];
            for (let i = 0; i < howManyNumbers; i++) {
                operands.push(promptNumber(`Number ${i+1}`));
            }

            operands.forEach(operand => {
                total = operator(total, operand);
            });
            return total;
            
        }
 
        let a = promptNumber("Number 1");
        let b = promptNumber("Number 2");

        if (operator === calculator.divide && b === 0) {
            return "Division by zero not allowed";
        }

        return operator(a, b);
    }

    // selectOperation()
})()