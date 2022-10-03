// Variables
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

// Functions
const keyClick = (event) => {
    if (event.target.matches("button")) {  // We are targeting the whole calculator__key div and checking if what we click matches to button. 
        
        // Below are new variables to be reuse.
        const action = event.target.dataset.action;  
        const keyContent = event.target.innerText; 
        const numberDisplay = display.innerText; 
        const lastKeyClicked = calculator.dataset.lastKeyClicked; 
        
        if (!action) {   // If button does not have an action attribute then it must be a number. If it is a number button, we update the data-last-key-clicked attribute to number. Help to keep on track what has just been clicked
            calculator.dataset.lastKeyClicked = "number"; 

            //if previous clicked is an operator or percentage or calculate or if display is 0. Calculator will show what we just click. if not then it will add the new number click with the number on display.
            if (numberDisplay === "0" || lastKeyClicked === "operator" || lastKeyClicked === "percentage" || lastKeyClicked === "calculate") { 
                display.innerText = keyContent;
            } else {    
                display.innerText = numberDisplay + keyContent;
            }
        }

        if (action === "decimal") { // if button has data-action attribute = decimal then check if display include ".". if it doesnt then concatenante with decimal.
            if (!numberDisplay.includes(".")) {
                display.innerText = numberDisplay + keyContent;
            }
        }

        // If data-action attribute = addition, subtraction, multiplication, division, set data-last-key-clicked to operator. If an operation button is clicked, the number on the displayed will be stored in data-first-value attribute to be use when calculating. 
        if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            calculator.dataset.lastKeyClicked = "operator"; 
            calculator.dataset.firstValue = numberDisplay;  
            // updating data-operation attribute with what the button is
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

        if (action === "calculate") { // if action attribute = calculate, set last-key-clicked = calculate. 
            calculator.dataset.lastKeyClicked = "calculate";
            //all variables below are important for calculating functions. 
            const firstValue = calculator.dataset.firstValue; 
            const secondValue = numberDisplay; 
            const operator = calculator.dataset.operator; 

            // when calculating, we need parameters. These parameters are named as such to be reused. 
            const calculateResult = (number1, operator, number2) => {
                let result = "";       //declare new variable to update result of calculation
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
            display.innerText = calculateResult(firstValue, operator, secondValue); //call calculatingResult function and updating display with its result.
        }
        
        if (action === "percentage") { // if action attribute = percentage then update last-key-clicked = percentage. 
            calculator.dataset.lastKeyClicked = "percentage";
            if (!numberDisplay.includes("%")) { // if display does not have % then take number displayed and multiply by 100 and concatenate with % to convert to percentage
                const formatedNumber = parseFloat(numberDisplay) * 100;
                display.innerText = formatedNumber + "%";
            }
        }
        
        if (action === "clearing") { // if action attribute = clearing, then update display with 0 and update last-key-clicked = clear
            calculator.dataset.lastKeyClicked = "clear";
            display.innerText = "0";
            }
        
        if (action === "negativepositive") { // if action attribute = negativepositive, update last-key-clicked = negative. 
            calculator.dataset.lastKeyClicked = "negative";
            if (numberDisplay != "0") { // If display is not 0 then check if display number has negative sign. if it doesnt then it will add it into the display if clicked. If it does have a negative on the display then it will remove if it is clicked.
                if (!numberDisplay.includes("-")) { 
                display.innerText = "-" + numberDisplay; 
                } else if (numberDisplay.includes("-")) { 
                display.innerText = numberDisplay.replace("-", "");
                }
            }
        }
    }
}

// AddEventListener 
keys.addEventListener("click", keyClick);
