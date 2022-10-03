// Variables
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

// Functions
const keyClick = (event) => {
    if (event.target.matches("button")) {  // below are new variables when a button is clicked
        const action = event.target.dataset.action;  //new variable for condition to access all action buttons  
        const keyContent = event.target.innerText; // new variable representing the key value
        const numberDisplay = display.innerText; // new variable for the number displayed on screen and to use to update everytime we click a button
        const lastKeyClicked = calculator.dataset.lastKeyClicked; // custom data attribute which will be useful when dealing with conditions
        
        if (!action) {   // If button does not have an action attribute then it must be a number. 
            calculator.dataset.lastKeyClicked = "number"; //If it is a number button, we update the data-last-key-clicked attribute to number
            if (numberDisplay === "0" || lastKeyClicked === "operator" || lastKeyClicked === "percentage" || lastKeyClicked === "calculate") { 
                display.innerText = keyContent; // if display shows 0 or last clicked button is a percentage or operator or calculate then display number clicked on screen
            } else {     // if display shows other numbers then concantenate new clicked button and update display
                display.innerText = numberDisplay + keyContent;
            }
        }

        if (action === "decimal") { // if button has data-action attribute = decimal then check if display include ".". if it doesnt then concatenante with decimal.
            if (!numberDisplay.includes(".")) {
                display.innerText = numberDisplay + keyContent;
            }
        }

        //If data-action attribute = addition, subtraction, multiplication, division, set data-last-key-clicked to operator.
        if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            calculator.dataset.lastKeyClicked = "operator";   //This will be used when calculating
            calculator.dataset.firstValue = numberDisplay;  //create custom data-first-value atribute to whatever the display show to store for when we are calculating
            if (action === "addition") { // if action attribute = addition, create custom data-operator and set to addition to be use in calculation
                calculator.dataset.operator = "addition";
            } else if (action === "subtraction") { // if action attribute = subtraction, create custom data-operator and set to subtraction to be use in calculation
                calculator.dataset.operator = "subtraction";
            } else if (action === "multiplication") { // if action attribute = multiplication, create custom data-operator and set to multiplication to be use in calculation
                calculator.dataset.operator = "multiplication";
            } else if (action === "division") { // if action attribute = division, create custom data-operator and set to division to be use in calculation
                calculator.dataset.operator = "division";
        }
    }

        if (action === "calculate") { // if action attribute = calculate, set last-key-clicked = calculate. 
            calculator.dataset.lastKeyClicked = "calculate";
            //all variables are important for calculating functions. 
            const firstValue = calculator.dataset.firstValue; // create new variable to retrieve value before operation button was clicked
            const secondValue = numberDisplay; // new variable to take value of current display
            const operator = calculator.dataset.operator; // new variable for operator to take operator attribute.

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
            display.innerText = calculateResult(firstValue, operator, secondValue); //call calculatingResult function and updating display with its return
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
            if (numberDisplay != "0") { // only work if number display is not 0 as 0 a is natural number
                if (!numberDisplay.includes("-")) { // if display does not have negative sign then we can add it in.
                display.innerText = "-" + numberDisplay; // display update with negative sign
                } else if (numberDisplay.includes("-")) { // if display does have negative sign then we remove it to turn it back to positive
                display.innerText = numberDisplay.replace("-", "");
                }
            }
        }
    }
}

// AddEventListener 
keys.addEventListener("click", keyClick);
