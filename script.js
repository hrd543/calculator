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
let operandString  = "";
let operand  = 0;
let operator = "+";

let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operations");
let equalsButton = document.querySelector(".equals");
let utilButtons = document.querySelectorAll(".utilities > button");

let screenContent = document.querySelector("p");

numberButtons.forEach(btn => btn.addEventListener("click", numPressed));
operationButtons.forEach(btn => btn.addEventListener("click", opPressed));
equalsButton.addEventListener("click", equalsPressed);
utilButtons.forEach(btn => btn.addEventListener("click", utilPressed));

function equalsPressed () {
    let answer = calculate(operator, operand, parseFloat(operandString));
    //alert(answer);
    operand = answer;
    operandString = `${operand}`;
    screenContent.textContent = answer;
}

function utilPressed() {
    let util = this.textContent;
    if(util[0] === "C"){
        operandString = "";
        operand = 0;
        operator = "+";
        screenContent.textContent = "";
    }
    else{
        operandString = operandString.slice(0,-1);
        screenContent.textContent = operandString;

        // If equals was pressed undo the last operation... Currently removes the last number.
    }
}

function opPressed () {
    operator = this.textContent;
    if(isNaN(operandString) || operandString.length === 0){
        alert("That's not a number");
    }
    else{
        operand = parseFloat(operandString);
        operandString = "";
        screenContent.textContent = operand + operator;
    }
}   


function numPressed () {
    operandString += this.textContent;
    screenContent.textContent += this.textContent;
}