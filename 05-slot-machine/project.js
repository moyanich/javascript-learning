/*
    Slot Machine Projecy
    1. Depost money
    2. Determine number of lines to bet on
    3. Collect Bet amount
    4. Spin slot machine
    5. Check if the user won
    6. Give user winnings or take bet if lost
    7. Play again

 */

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: $ ");

        // convert to a number
        const numberDepositAmount = parseFloat(depositAmount);
    
        // let amountDeposited = (isNaN(numberDepositAmount) || numberDepositAmount <= 0) ? "Invalid Deposit Amount. Try Again!" : numberDepositAmount;

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log( "Invalid Deposit Amount. Try Again!");
        } else {
            return numberDepositAmount;
        }
        
    }
   
}

const depositAmount = deposit();

console.log(depositAmount);

