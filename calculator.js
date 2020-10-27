let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll("button"));
let digits = Array.from(document.querySelectorAll(".digit"));
let operators = Array.from(document.querySelectorAll(".operator"));
let displayContent = {val: ""};
let num1 = null;
let num2 = null;
let operand1 = null;
let operand2 = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className == "digit"){
            displayContent.val += button.textContent;
            display.textContent = displayContent.val;
        } else if (button.className == "operator"){
            displayContent.val += (" " + button.textContent + " ");
            display.textContent = displayContent;
        } else if (button.id == "equals") {

        }
    })
});

const calculate = () => {



}
