// Variables
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const decimal = document.querySelector("#decimal");

let previousDisplay = [];
let currentDisplay = [];


// Functions
const keyClick = (event) => {
    if (event.target.matches("button")) {  
        const key = event.target;   // need to write out pseudoCode
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const numberDisplay = display.innerText;
        const lastKeyClicked = calculator.dataset.lastKeyClicked; 
        
        if (!action) {   
            calculator.dataset.lastKeyClicked = "number";
            if (numberDisplay === "0" || lastKeyClicked === "operator" || lastKeyClicked === "percentage") { 
                display.innerText = keyContent; 
            } else {      
                display.innerText = numberDisplay + keyContent;
            }
        }

        if (action === "decimal") {
            if (!numberDisplay.includes(".")) {
                display.innerText = numberDisplay + ".";
            } else {
                display.innerText = numberDisplay;
            }
        }

        if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            calculator.dataset.lastKeyClicked = "operator";    
            calculator.dataset.firstValue = numberDisplay; 
            if (action === "addition") {
                calculator.dataset.operator = "addition";
            } else if (action === "subtraction") {
                calculator.dataset.operator = "subtraction";
            } else if (action === "multiplication") {
                calculator.dataset.operator = "multiplication";
            } else if (action === "division") {
                calculator.dataset.operator = "division";
        }
    }

        if (action === "calculate") {
            calculator.dataset.lastKeyClicked = "calculate";
            const firstValue = calculator.dataset.firstValue;
            const secondValue = numberDisplay;
            const operator = calculator.dataset.operator;

            const calculateResult = (number1, operator, number2) => {
                let result = "";
                if (operator === "addition") {
                    result = parseFloat(number1) + parseFloat(number2);
                } else if (operator === "subtraction") {
                    result = parseFloat(number1) - parseFloat(number2);
                } else if (operator === "multiplication") {
                    result = parseFloat(number1) * parseFloat(number2);
                } else if (operator === "division") {
                    result = parseFloat(number1) / parseFloat(number2);
                }
                return result;
            }
            display.innerText = calculateResult(firstValue, operator, secondValue);
        }
        
        if (action === "percentage") {
            calculator.dataset.lastKeyClicked = "percentage";
            const formatedNumber = parseFloat(numberDisplay) * 100;
            display.innerText = formatedNumber + "%";
        }
        
        if (action === "clearing") {
            calculator.dataset.lastKeyClicked = "clear";
            display.innerText = 0;
            }
        
        if (action === "negativepositive") {
            calculator.dataset.lastKeyClicked = "negative";
            if (!numberDisplay.includes("-")) {
                display.innerText = "-" + numberDisplay;
            } else if (numberDisplay.includes("-")) {
                display.innerText = numberDisplay.replace("-", "");
            }
        }
    }
}

// AddEventListener 
keys.addEventListener("click", keyClick);
