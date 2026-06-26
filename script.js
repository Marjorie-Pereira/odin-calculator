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

const num1;
const num2;
const operator;

function operate(operator, operand1, operand2) {
  switch(operator) {
    case '+':
      return add(operand1, operand2);
      break;
    case '-':
      return subtract(operand1, operand2);
      break;
    case '*':
      return multiply(operand1, operand2);
      break;
    case '/':
      return divide(operand1, operand2);
      break;
    default:
      return 'Invalid operator';
  }
}