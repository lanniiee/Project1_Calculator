"use strict";

// Adding Element
var calculator = document.querySelector(".calculator");
var keys = calculator.querySelector(".calculator__keys");
var display = document.querySelector(".calculator__display"); // Functions

var keyClick = function keyClick(event) {
  if (event.target.matches("button")) {
    //declare new variables to be able to reuse
    var key = event.target;
    var action = key.dataset.action;
    var keyContent = key.innerText;
    var numberDisplay = display.innerText;

    if (!action) {
      // if the button is not an action then display on calculator display
      if (numberDisplay === "0") {
        //if display number is "0" which is default then replace with the key that is clicked
        display.innerText = keyContent;
      } else {
        // if display number is anything else, concat the display number with the clicked button
        display.innerText = numberDisplay + keyContent;
      }

      console.log("number key!"); //check to see the number keys are working
    } else if (action === "addition" || action === "subtraction" || action === "multiplication" || action === "division") {
      console.log("operator keys!");
    } else if (action === "percentage") {
      console.log("percentage key!");
    } else if (action === "clearing") {
      console.log("All clear key!");
    } else if (action === "calculate") {
      console.log("Equal key!");
    } else if (action === "negativepositive") {
      console.log("Negative key!");
    }
  }
};

var clearAll = function clearAll(event) {
  var key = event.target;
  var action = key.dataset.action;
  var keyContent = key.innerText;
  var numberDisplay = display.innerText;

  if (action === "clearing") {
    display.innerText = 0;
  }
}; // AddEventListener 


keys.addEventListener("click", keyClick);
keys.addEventListener("click", clearAll);