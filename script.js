// Returns the value of operation(x,y)
// E.g. "/", 4, 2 ==> 2
function calculate(operation, x, y){
    switch(operation){
        case "+": return x+y;
        case "-": return x-y;
        case "/": return x/y;
        case "*": return x*y;
    }
}


// Add event listeners to all buttons:
// initially the first number is set to an empty string.
// Whenever a number is pressed, it gets concatenated onto this string.
// This string is printed on the bottom line of the screen.
// When an operator button is pressed, this number is parsed and stored as a number.
// This number along with the operator are printed on the top line.
// If it is Nan, then return error.
// Store whichever operation was pressed as a string.
// Otherwise, initialise the string to zero once more and wait for more numbers.
// When equals is pressed, parse the second input and send both to the calc function.


// The string to store the values in the bottom line of the screen
let firstOperandString = "";
let operator = "";

let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operations");
let equalsButton = document.querySelector(".equals");
let utilButtons = document.querySelectorAll(".utilities > button");

numberButtons.forEach(btn => btn.addEventListener("click", numPressed));
operationButtons.forEach(btn => btn.addEventListener("click", opPressed));
equalsButton.addEventListener("click", equalsPressed);
utilButtons.forEach(btn => btn.addEventListener("click", utilPressed));

function equalsPressed () {
    alert("equals");
}

function utilPressed() {
    alert(this.textContent);
}

function opPressed () {
    operator = this.textContent;
    alert(this.textContent);
}   


function numPressed () {
    firstOperandString += this.textContent;
    alert(this.textContent);
}