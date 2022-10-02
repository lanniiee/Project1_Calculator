// Adding Element
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const decimal = document.querySelector("#decimal");

let previousDisplay = [];
let currentDisplay = [];

// Functions
const keyClick = (event) => {
    if (event.target.matches("button")) {  //declare new variables to be able to reuse
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const numberDisplay = display.innerText;
        const lastKeyClicked = calculator.dataset.lastKeyClicked; // create a new variable to be able to reuse to check for conditions.
        
        if (!action) {   // if the button is not an action then display on calculator display
            calculator.dataset.lastKeyClicked = "number";
            if (numberDisplay === "0" || lastKeyClicked === "operator") { //if display number is "0" which is default then replace with the key that is clicked
                display.innerText = keyContent; 
            } else {      // if display number is anything else, concat the display number with the clicked button
                display.innerText = numberDisplay + keyContent;
            }
        }

        if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            calculator.dataset.lastKeyClicked = "operator";    //if key clicked is an operation key then create new data attribute called last-key-clicked and make it equal to operator
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

// need to log number to array
// do maths function depending on operations
// AddEventListener 
keys.addEventListener("click", keyClick);

