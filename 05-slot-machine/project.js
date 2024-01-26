/** 
    Slot Machine Project
    1. Depost money
    2. Determine number of lines to bet on
    3. Collect Bet amount
    4. Spin slot machine
    5. Check if the user won
    6. Give user winnings or take bet if lost
    7. Play again

    @link https://www.youtube.com/watch?v=E3XxeE7NF30

*/

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}




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


const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log( "Invalid Number of lines. Try Again!");
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the total bet per line: ");
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log( "Invalid Bet. Try Again!");
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];

    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
        console.log(symbols);
    }

    const reels = 
    [
        [ ],
        [ ],
        [ ],
    ];

    for (let j = 0; j < COLS; j++) {
        for (let k = 0; k < ROWS; k++) {
            const reelSymbols = [...symbols];
        }
    }

}


    

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
spin();

// const depositAmount = deposit();
// console.log(depositAmount);

// console.log(linesSelected);
