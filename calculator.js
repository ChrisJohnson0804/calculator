let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll("button"));
let digits = Array.from(document.querySelectorAll(".digit"));
let operators = Array.from(document.querySelectorAll(".operator"));
let displayContent = {val: ""};
let num1 = null;
let num2 = null;
let operand = null;
let compute = false;
let isDecimal = false;

// let num1Display = document.querySelector("#num1"),
//     num2Display = document.querySelector("#num2"),
//     operandDisplay = document.querySelector("#operand");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className == "digit"){
            if(button.id =="point"){
                isDecimal = true;
            }
            if (compute == true){
                clearDisplay();
                compute = false;
            }
            if (operand == null){
            displayContent.val += button.textContent;
            display.textContent = displayContent.val;
            } else if (operand != null && num1 == null) {
                num1 = parse(isDecimal, displayContent.val);
                clearDisplay();
                displayContent.val += button.textContent;
                display.textContent = displayContent.val;
            } else if (operand != null && num1 != null){
                displayContent.val += button.textContent;
                display.textContent = displayContent.val;
            }
        } else if (button.className == "operator"){
            if (num1 != null && num2 == null && displayContent.val != ""){
                num2 = parse(isDecimal, displayContent.val);
                num1 = calculate(operand, num1, num2);
                displayContent.val = num1;
                display.textContent = displayContent.val;
                num2 = null;
                operand = button.textContent;
                isDecimal = false;
                compute = true;
            } else operand = button.textContent;
        } else if (button.id == "equals" && num1 != null) {
            num2 = parse(isDecimal, displayContent.val);
            num1 = calculate(operand, num1, num2);
            displayContent.val = num1;
            display.textContent = displayContent.val;
            num2 = null;
            operand = null;
            num1 = null;
            compute = true;
            isDecimal = false;
        } else if (button.id == "clearall"){
            clearDisplay();
            clearVals();
        }
    // num1Display.textContent = "num1: " + num1;
    // num2Display.textContent = "num2: " + num2;
    // operandDisplay.textContent = "operand: " + operand;
    });
});

const calculate = (operand, num1, num2) => {
    if (operand == "+"){
        return num1 + num2;
    }
    if (operand == "-"){
        return num1 - num2;
    }
    if (operand == "*"){
        return num1*num2;
    }
    if (operand == "/"){
        return num1/num2;
    }
}

const parse = (isDecimal, text) => {
    if (isDecimal == true){
        return (Math.round(parseFloat(text)*100)/100);
    } else {
        return parseInt(text);
    }
}
const clearDisplay = () => {
    displayContent.val = "";
    display.textContent = displayContent.val;
}
const clearVals = () => {
    compute = false;
    num1 = null;
    num2 = null;
    operand = null;
    isDecimal = false;
}