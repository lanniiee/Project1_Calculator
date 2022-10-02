// Adding Element
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

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
            console.log("number key!");   //check to see the number keys are working
        }

        if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            calculator.dataset.lastKeyClicked = "operator";    //if key clicked is an operation key then create new data attribute called last-key-clicked and make it equal to operator
            calculator.dataset.operator = "action";
            calculator.dataset.firstValue = numberDisplay;
            console.log("operator keys!");   
        }

        if (action === "calculate") {
            calculator.dataset.lastKeyClicked = "calculate";
            const firstValue = calculator.dataset.firstValue;
            const secondValue = numberDisplay;
            const calculateResult = (number1, operator, number2) => {

            }
            console.log("Equal key!");
        
        if (action === "percentage") {
            calculator.dataset.lastKeyClicked = "percentage";
            console.log("percentage key!");
        }
        
        if (action === "clearing") {
            calculator.dataset.lastKeyClicked = "clear";
            console.log("All clear key!");
            display.innerText = 0;
            }
        } 
        
        if (action === "negativepositive") {
            calculator.dataset.lastKeyClicked = "negative";
            console.log("Negative key!");
        }
    }
}

// need to log number to array
// do maths function depending on operations


const clearAll = (event) => {
    const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const numberDisplay = display.innerText;
    if (action === "clearing") {
        display.innerText = 0;
    }
}

// AddEventListener 
keys.addEventListener("click", keyClick);

