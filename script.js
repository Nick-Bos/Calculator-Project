function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//numberBtn functions
function numInput(e) {
  newstart();
  let display = document.getElementById("calc-display");
  let obj = e.target;
  display.textContent += obj.textContent;
}

let display = document.getElementById("calc-display");

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

//symbolBtn function
function symbolInput(e) {
  let display = document.getElementById("calc-display");
  let obj = e.target;
  display.textContent += obj.textContent;
}

//symbols
let operandMultiply = document.getElementById("multiply-btn");
let operandDivide = document.getElementById("divide-btn");
let operandSubtract = document.getElementById("minus-btn");
let operandAdd = document.getElementById("add-btn");
let decimal = document.getElementById("decimal-btn");
operandAdd.addEventListener("click", operandStore);
operandAdd.addEventListener("click", operatorBtnFirstNum);
operandAdd.addEventListener("click", symbolInput);
operandMultiply.addEventListener("click", operatorBtnFirstNum);
operandSubtract.addEventListener("click", operatorBtnFirstNum);
operandDivide.addEventListener("click", operatorBtnFirstNum);
decimal.addEventListener("click", symbolInput);

//operatorBtn
function operatorBtnFirstNum() {
  if (display != "") {
    firstNum = display.textContent;
  }
  let firstNumFiltArr = firstNum.match(/([0-9])\d*/g);
  let firstNumFiltStr = firstNumFiltArr[0];
  let firstNumFiltNum = parseInt(firstNumFiltStr);
  console.log(firstNumFiltNum);
}

function operandStore() {
  console.log("clicked");
}

//clear function
function clear() {
  display.textContent = "";
  display.textContent = 0;
}
//clearBtn
let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);

//newstart func
function newstart() {
  if (display.textContent == 0) {
    display.textContent = "";
  }
}

function operate(operator, a, b) {
  return operator(a, b);
}

const test = (op, a, b) => {
  return op(a, b);
};

// equals
function equals() {
  operate(operator, a, b);
}

function singleOperate() {}

//equalsBtn
let equalsBtn = document.getElementById("equals-btn");
equalsBtn.addEventListener("click", equals);

//WRITE ONE BIG FUNCTION FOR THE EVEMT LISTENER
