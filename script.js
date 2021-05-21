class FixedStack {
    constructor(length, items=[]) {
        this.length = length;
        this.items = Array.isArray(items) ? items.slice(length) : [items];
    }

    // Remove the last element in the stack, i.e. the most recent
    pop(){
        return this.items.pop();
    }

    // Push an element onto the end of the stack and resize the array <= length
    // Return the first element if it was removed, or null otherwise
    push(element){
        this.items.push(element);
        return (this.items.length > this.length) ? this.items.shift() : null;
    }
}

// Returns the value of operation(x,y)
// E.g. "/", 4, 2 ==> 2
function calculate(operation, x, y){
    switch(operation){
        case "+": return x+y;
        case "-": return x-y;
        case "/": return x/y;
        case "*": return x*y;
        case "=": return x;
    }
}

// A simple object to store each operand, operator pair, i.e. 3+ or 0.1*
class Operation {
    constructor(operator, operand) {
        this.operator = operator;
        this.operand = operand;
    }

    // Return the inverse of the operation, i.e. + --> - and * --> /
    inverse() {
        switch(this.operator){
            case "+": return "-";
            case "-": return "+";
            case "/": return "*";
            case "*": return "/";
            case "=": return "=";
        }
    }
}

// Create a new FixedStack to store pairs of operations, given as a class of operation.
let operations = new FixedStack(20);


// Start with an empty string for the operand. Then, each time a number button is pressed,
// append this number to the end of the string.
// If an operator button is pressed, then convert that string to a float, and create a new Operation
// with the operand operator pair. Then reset the string to empty.
// We also need a number to store the current calculation output. Then when an operator is pressed,
// the number will be added to this and the output updated.
// If the equals button is pressed, perform the calculation

let opString = "";
let output = 0;
let op = new Operation("+", 0);
let recentButton = 0; // This boolean is 0 if an operator has just been pressed, 1 otherwise.

let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operations");
let equalsButton = document.querySelector(".equals");
let utilButtons = document.querySelectorAll(".utilities > button");

let screenContent = document.querySelectorAll("p");

numberButtons.forEach(btn => btn.addEventListener("click", numPressed));
operationButtons.forEach(btn => btn.addEventListener("click", opPressed));
equalsButton.addEventListener("click", equalsPressed);
utilButtons.forEach(btn => btn.addEventListener("click", utilPressed));

function equalsPressed () {
    if (isNaN(opString) || opString.length === 0){
        alert("That is not a number!");
    }
    else {
        op.operand = parseFloat(opString);
        if (op.operator !== "=") operations.push(new Operation(op.operator, op.operand));
        console.log(op);
        screenContent[0].textContent = `${output} ${op.operator} ${op.operand}`;
        output = calculate(op.operator, output, op.operand);
        screenContent[1].textContent = output;
        op.operator = "=";
        opString = output;
        console.log(output);
    }
}

function utilPressed() {
    if (this.textContent === "Clear") {
        //clear method
    }

    else if (this.textContent === "Undo") {
        //Undo method
        // There are two cases:
        // 1. The last button pressed was a number, in which case remove the last digit from the opString
        // 2. The last button was an operator, in which case:
        // Take the current output and perform the inverse calculation with the most recent operation.
        op = operations.pop();
        output = calculate(op.inverse(), output, op.operand);
        opString = `${op.operand}`;
        screenContent[0].textContent = `${op.operand} ${op.operator}`;
        screenContent[1].textContent = opString;
    }

    else {
        opString = opString.slice(0, -1);
        screenContent[1].textContent = opString;
    }
}

function opPressed () {
    if (isNaN(opString) || opString.length === 0){
        alert("That is not a number!");
    }
    else {
        op.operand = parseFloat(opString);
        if (op.operator !== "=") operations.push(new Operation(op.operator, op.operand));
        console.log(op);
        console.log(operations);
        output = calculate(op.operator, output, op.operand);
        op.operator = this.textContent;
        screenContent[0].textContent = op.operator;
        screenContent[1].textContent = output;
        opString = "";
        console.log(output);
    }
}   


function numPressed () {
    opString += this.textContent;
    screenContent[0].textContent = `${op.operand} ${op.operator}`;
    screenContent[1].textContent = opString;
}