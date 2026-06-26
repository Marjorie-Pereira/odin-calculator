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
const calculateBtn = document.querySelector(".calculate");
const clearBtn = document.querySelector(".clear");

const operationDisplay = document.querySelector(".operation");
const resultDisplay = document.querySelector(".result");

let num1;
let num2;
let operator;
console.log(operationDisplay);

calculateBtn.addEventListener("click", () => {
  [num1, _, num2] = operationDisplay.textContent.split(" ");
  // return if calculation not complete (must have 2 numbers and operator)
  if (!operator || !num2) return;

  console.log(num1, num2, operator);

  const result = operate(operator, Number(num1), Number(num2));
  console.log(result);
  resultDisplay.style.display = "block";
  resultDisplay.innerText = result;
});

clearBtn.addEventListener("click", () => {
  operationDisplay.innerHTML = " ";
  resultDisplay.style.display = "none";
  resultDisplay.innerText = " ";
  num1 = num2 = operator = null
  console.log(num1, num2, operator)
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    // return if all three elements of the calculation are displayed
    const digits = operationDisplay.innerText.trim().split(" ");
    console.log(digits);
    if (num2) return;

    const keyTextContent = key.textContent.trim();

    // adds space between operator and last operand
    const newValue =
      digits.length == 2 ? keyTextContent.padStart(2) : keyTextContent;
    operationDisplay.innerText += newValue;
  });
});

operatorKeys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log(operationDisplay.innerHTML)
    if (operator || operationDisplay.innerHTML.trim() === "") return;
    const textContent = key.textContent.trim();
    const operatorValue =
      textContent === "×" ? "*" : textContent === "÷" ? "/" : textContent;

    operator = operatorValue;

    operationDisplay.innerText += key.textContent.padStart(2);
  });
});
