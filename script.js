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
  console.log(operator, operand1, operand2);
  if (operand2 === 0 && operator === "/") {
    return "Error: Division by zero";
  }

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

function setOperationValues() {
  [num1, operatorTextValue, num2] = operationDisplay.textContent.split(" ");

  const operatorValue =
    operatorTextValue === "×"
      ? "*"
      : operatorTextValue === "÷"
        ? "/"
        : operatorTextValue;
  operator = operatorValue;
}

function clear() {
  operationDisplay.textContent = "";
  resultDisplay.style.display = "none";
  resultDisplay.textContent = "";
  num1 = num2 = operator = null;
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

calculateBtn.addEventListener("click", () => {
  setOperationValues();

  if (!operator || !num2) return;

  const result = operate(operator, Number(num1), Number(num2));

  resultDisplay.style.display = "block";
  resultDisplay.textContent = result;
});

clearBtn.addEventListener("click", () => clear());

// update display with numbers typed
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const digits = operationDisplay.textContent.trim().split(" ");

    if (resultDisplay.style.display === "block") clear();

    const keyTextContent = key.textContent.trim();

    // adds space between operator and last operand
    const newValue =
      digits.length == 2 ? keyTextContent.padStart(2) : keyTextContent;
    operationDisplay.textContent += newValue;
  });
});

operatorKeys.forEach((key) => {
  key.addEventListener("click", () => {
    const operation = operationDisplay.textContent;
    if (operation.trim() === "" || resultDisplay.style.display === "block")
      return;

    const characters = operation.split(" ");
    const oldOperator = characters.find((char) => isNaN(char));
    const newOperator = key.textContent.trim();

    if (oldOperator) {
      const numbers = characters.filter(
        (char) => !isNaN(char) && char.trim() != "",
      );

      if (numbers.length > 1) {
        // perform calculus
        setOperationValues();
        const result = operate(operator, Number(num1), Number(num2));

        operationDisplay.textContent = `${result} ${newOperator}`;
      } else {
        operationDisplay.textContent = operation.replace(
          oldOperator,
          newOperator,
        );
      }
    } else {
      operationDisplay.textContent += newOperator.padStart(2);
    }
  });
});
