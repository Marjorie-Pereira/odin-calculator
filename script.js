function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
      break;
    case "-":
      return subtract(operand1, operand2);
      break;
    case "*":
      return multiply(operand1, operand2);
      break;
    case "/":
      return divide(operand1, operand2);
      break;
    default:
      return "Invalid operator";
  }
}

const keys = document.querySelectorAll(".key");
const operatorKeys = document.querySelectorAll(".operator");
const operationDisplay = document.querySelector(".operation");

const resultDisplay = document.querySelector(".result");
const calculateBtn = document.querySelector(".calculate");

let num1;
let num2;
let operator;
console.log(operationDisplay);

calculateBtn.addEventListener("click", () => {
  [num1, _, num2] = operationDisplay.textContent.split(" ")
  console.log(num1, num2)
  resultDisplay.style.display = "block";
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    // return if all three elements of the calculation are displayed
    const digits = operationDisplay.textContent.split(" ");
    if (num2) return;

    const keyTextContent = key.textContent.trim();
    

    const newValue = digits.length == 2 ? keyTextContent.padStart(2) : keyTextContent;
    operationDisplay.innerText += newValue;
  });
});



console.log(num1, operator, num2);

operatorKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if(operator || operationDisplay.textContent === '') return
    const textContent = key.textContent.trim();
    const operatorValue = textContent === '×' ? '*' : textContent === '' ? '/' : textContent
    operator = key.textContent;
    

    operationDisplay.innerText += key.textContent.padStart(2);
  });
});


