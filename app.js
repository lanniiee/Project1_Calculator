// Adding Element
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

// Functions
const keyClick = (event) => {
    if (event.target.matches("button")) {  //declare new variables to be able to reuse
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const numberDisplay = display.innerText;
        if (!action) {   // if the button is not an action then display on calculator display
            if (numberDisplay === "0") { //if display number is "0" which is default then replace with the key that is clicked
                display.innerText = keyContent; 
            } else {      // if display number is anything else, concat the display number with the clicked button
                display.innerText = numberDisplay + keyContent;
            }
            console.log("number key!");   //check to see the number keys are working
        } else if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            console.log("operator keys!");
        } else if (action === "percentage") {
            console.log("percentage key!");
        } else if (action === "clearing") {
            console.log("All clear key!");
        } else if (action === "calculate") {
            console.log("Equal key!")
        } else if (action === "negativepositive") {
            console.log("Negative key!")
        }
    }
}

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
keys.addEventListener("click", clearAll);
