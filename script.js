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

function operate(operator, a, b) {
  return operator(a, b);
}

//number key functions
function numInput(e) {
  let display = document.getElementById("calc-display");
  let obj = e.target;
  display.textContent += obj.textContent;
}

let display = document.getElementById("calc-display");
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

function symbolInput(e) {
  let display = document.getElementById("calc-display");
  let obj = e.target;
  display.textContent += obj.textContent;
}

let operandMultiply = document.getElementById("multiply-btn");
let operandDivide = document.getElementById("divide-btn");
let operandSubtract = document.getElementById("minus-btn");
let operandAdd = document.getElementById("add-btn");
let decimal = document.getElementById("decimal-btn");

operandMultiply.addEventListener("click", symbolInput);
operandAdd.addEventListener("click", symbolInput);
operandSubtract.addEventListener("click", symbolInput);
operandDivide.addEventListener("click", symbolInput);
decimal.addEventListener("click", symbolInput);
