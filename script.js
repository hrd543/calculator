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


let opString = "";
let output = 0;
let op = new Operation("+", 0);

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
        console.log(op);
        screenContent[0].textContent = `${output} ${op.operator} ${op.operand}`;
        output = calculate(op.operator, output, op.operand);
        screenContent[1].textContent = output;
        op.operator = "=";
        opString = `${output}`;
        console.log(output);
    }
}

function utilPressed() {
    if (this.textContent === "Clear") {
        //clear method
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
        console.log(op);
        output = calculate(op.operator, output, op.operand);
        op.operator = this.textContent;
        screenContent[0].textContent = `${output} ${op.operator}`;
        screenContent[1].textContent = "";
        opString = "";
        console.log(output);
    }
}   


function numPressed () {
    opString += this.textContent;
    screenContent[0].textContent = `${output} ${op.operator}`;
    screenContent[1].textContent = opString;
}