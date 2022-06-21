let valueOne = 0;
let valueTwo = 0;
let selectedOp = "";
let returnValue = "";

let display = document.getElementById("calc-display");

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

//symbol function displays symbols as they are selected
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
  valueOne = firstNumFiltNum;
  console.log("first", valueOne);
};

// equals
let equalsBtn = document.getElementById("equals-btn");
equalsBtn.addEventListener("click", (e) => {
  secondNum = display.textContent;
  let secondNumFiltArr = secondNum.match(/([0-9])\d*/g);
  let secondNumFiltStr = secondNumFiltArr[0];
  let secondNumFiltNum = parseInt(secondNumFiltStr);
  valueTwo = secondNumFiltNum;
  console.log("Second", valueTwo);
  operator = selectedOp;
  a = valueOne;
  b = valueTwo;
  if (selectedOp == "+") {
    returnValue = a + b;
  } else if (selectedOp == "-") {
    returnValue = a - b;
  } else if (selectedOp == "\367") {
    returnValue = a / b;
  } else if (selectedOp == "x") {
    returnValue = a * b;
  }
  display.textContent = returnValue;
});

//symbols
let decimal = document.getElementById("decimal-btn");
let operandMultiply = document.getElementById("multiply-btn");
let operandDivide = document.getElementById("divide-btn");
let operandSubtract = document.getElementById("minus-btn");
let operandAdd = document.getElementById("add-btn");
let operands = document.getElementById("buttons");

operandAdd.addEventListener("click", firstNumber);
operands.addEventListener("click", (e) => {
  if (e.target.textContent == "+") {
    selectedOp = "+";
  } else if (e.target.textContent == "-") {
    selectedOp = "-";
  } else if (e.target.textContent == "\367") {
    selectedOp = "\367";
  } else if (e.target.textContent == "x") {
    selectedOp = "x";
  } else {
    return;
  }
  console.log(selectedOp);
});
operandAdd.addEventListener("click", symbolInput);
operandMultiply.addEventListener("click", firstNumber);
operandMultiply.addEventListener("click", symbolInput);
operandSubtract.addEventListener("click", firstNumber);
operandSubtract.addEventListener("click", symbolInput);
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

//delete function deletes last digit when called
let del = document.getElementById("del-btn");
del.addEventListener("click", back);

//working on delete button
function back() {
  let value = document.getElementById("calc-display").value;
  console.log(value);
  document.getElementById("calc-display").value = value.substr(
    0,
    value.length - 1
  );
}
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
console.log();
