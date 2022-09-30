// Adding Element
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

// Functions
const keyClick = (event) => {
    if (event.target.matches("button")) {
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const numberDisplay = display.innerText;
        if (!action) {
            if (numberDisplay === "0") {
                display.innerText = keyContent;
            } else {
                display.innerText = numberDisplay + keyContent;
            }
            console.log("number key!");
        } else if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
            console.log("operator keys!");
        } else if (action === "decimal!") {
            console.log("decimal key!");
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

const calculatorDisplay = (event) => {
    
}



// AddEventListener 
keys.addEventListener("click", keyClick);
