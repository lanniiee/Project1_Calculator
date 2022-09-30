// Adding Element
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

// Functions

//function for key click. 
const keyClick = (event) => {
    if (event.target.matches("button")) {
        const key = event.target;
        const action = key.dataset.action;
        const content = key.innerText;
        const numberDisplayed = display.innerText; 
        if (!action) {    //
            console.log("number key!");
            if (numberDisplayed === "0") {
                display.innerText = content;
            } else {
                display.innerText = numberDisplayed+content;
            }
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


// AddEventListener 
keys.addEventListener("click", keyClick);
