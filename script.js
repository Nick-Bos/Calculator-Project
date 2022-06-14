let display = document.getElementById("calc-display");
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

//numberBtn function displays numbers as they are selected
const numInput = (e) => {
  newstart();
  let display = document.getElementById("calc-display");
  let obj = e.target;
  display.textContent += obj.textContent;
};

//numbers
let num0 = document.getElementById("zero-btn");
let num1 = document.getElementById("1-btn");
let num2 = document.getElementById("2-btn");
let num3 = document.getElementById("3-btn");
let num4 = document.getElementById("4-btn");
let num5 = document.getElementById("5-btn");
let num6 = document.getElementById("6-btn");
let num7 = document.getElementById("7-btn");
let num8 = document.getElementById("8-btn");
let num9 = document.getElementById("9-btn");

num0.addEventListener("click", numInput);
num1.addEventListener("click", numInput);
num2.addEventListener("click", numInput);
num3.addEventListener("click", numInput);
num4.addEventListener("click", numInput);
num5.addEventListener("click", numInput);
num6.addEventListener("click", numInput);
num7.addEventListener("click", numInput);
num8.addEventListener("click", numInput);
num9.addEventListener("click", numInput);

//symbolBtn function displays symbols as they are selected
const symbolInput = (e) => {
  let display = document.getElementById("calc-display");
  let obj = e.target;

  if (
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "\367" ||
    display.textContent == "x"
  ) {
    display.textContent += obj.textContent;
  } else {
    display.textContent = obj.textContent;
  }
};
//calculate function collects the first number, second number and operator and stores them ready for calculation
const firstNumber = () => {
  if (display != "") {
    firstNum = display.textContent;
  }
  let firstNumFiltArr = firstNum.match(/([0-9])\d*/g);
  let firstNumFiltStr = firstNumFiltArr[0];
  let firstNumFiltNum = parseInt(firstNumFiltStr);
  return firstNumFiltNum;
};

const operandStore = (e) => {
  let obj = e.target;
  let selectedOperand = obj.textContent; // not reading text content???
  console.log(obj.textContent);
  if (selectedOperand == "+") {
    return add;
  } else if (selectedOperand == "-") {
    return subtract;
  } else if (selectedOperand == "\367") {
    return divide;
  } else {
    return multiply;
  }
};

const operate = (operator, a, b) => {
  return operator(a, b);
};

// equals
const equals = () => {
  secondNum = display.textContent;
  console.log(display.textContent);
  let secondNumFiltArr = secondNum.match(/([0-9])\d*/g);
  let secondNumFiltStr = secondNumFiltArr[0];
  let secondNumFiltNum = parseInt(secondNumFiltStr);
  let operator = operandStore;
  let a = firstNumber;
  let b = secondNumFiltNum;
  operate(operator, a, b);
};
let equalsBtn = document.getElementById("equals-btn");
equalsBtn.addEventListener("click", equals);

//symbols
let operandMultiply = document.getElementById("multiply-btn");
let operandDivide = document.getElementById("divide-btn");
let operandSubtract = document.getElementById("minus-btn");
let operandAdd = document.getElementById("add-btn");
let decimal = document.getElementById("decimal-btn");
//

operandAdd.addEventListener("click", firstNumber);
operandAdd.addEventListener("click", operandStore);
operandAdd.addEventListener("click", symbolInput);
operandMultiply.addEventListener("click", operandStore);
operandMultiply.addEventListener("click", firstNumber);
operandMultiply.addEventListener("click", symbolInput);
operandSubtract.addEventListener("click", operandStore);
operandSubtract.addEventListener("click", firstNumber);
operandSubtract.addEventListener("click", symbolInput);
operandDivide.addEventListener("click", operandStore);
operandDivide.addEventListener("click", firstNumber);
operandDivide.addEventListener("click", symbolInput);
decimal.addEventListener("click", symbolInput);

//clear function clears the display back to the default of "0"
function clear() {
  display.textContent = "";
  display.textContent = 0;
}
//clearBtn
let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);

//newstart function clears the display when a new number is being input
function newstart() {
  if (display.textContent === "0") {
    display.textContent = "";
  } else if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "\367" ||
    display.textContent === "x"
  ) {
    display.textContent = "";
  }
}

//equalsBtn
