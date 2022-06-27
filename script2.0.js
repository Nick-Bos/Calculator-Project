let valueOne = 0;
let valueTwo = 0;
let prevVal = 0;
let operator = "";
let temp = "";

const buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.textContent == "C") {
    clear();
  }
  if (e.target.textContent == "=") {
    evaluate();
    currentValue();
    test();
  }
  if (e.target.textContent == "+") {
    operator = "+";
    updateDisplayOp(operator);
    multiOp();
  }
  if (e.target.textContent == "-") {
    operator = "-";
    updateDisplayOp(operator);
    multiOp();
  }
  if (e.target.textContent == "x") {
    operator = "x";
    updateDisplayOp(operator);
    multiOp();
  }
  if (e.target.textContent == "\367") {
    operator = "\367";
    updateDisplayOp(operator);
    multiOp();
  }
  if (e.target.textContent == "0") {
    temp = 0;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "1") {
    temp = 1;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "2") {
    temp = 2;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "3") {
    temp = 3;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "4") {
    temp = 4;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "5") {
    temp = 5;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "6") {
    temp = 6;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "7") {
    temp = 7;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "8") {
    temp = 8;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }
  if (e.target.textContent == "9") {
    temp = 9;
    updateDisplayNum(temp);
    storeValOne();
    storeValTwo();
  }

  console.log(temp, "temp");
  console.log(valueOne, "value one");
  console.log(valueTwo, "value two");
  console.log(prevVal, "prevVal");
  console.log(operator);
});

const display = document.getElementById("calc-display");
//updates display for numbers
let updateDisplayNum = (input) => {
  clearLast();
  return (display.textContent += input);
};
//updates display for operators
let updateDisplayOp = (input) => {
  clearLast();
  let display = document.getElementById("calc-display");
  let obj = input;

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
  return (display.textContent += input);
};

function clearLast() {
  if (
    display.textContent === "0" ||
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "\367" ||
    display.textContent == "x"
  ) {
    display.textContent = "";
  }
}

function clear() {
  display.textContent = "0";
  valueOne = 0;
  valueTwo = 0;
  operator = "";
}

//operate function returns selected operation output
let operate = (a, b) => {
  if (operator == "+") {
    return a + b;
  }
  if (operator == "-") {
    return a - b;
  }
  if (operator == "x") {
    return a * b;
  }
  if (operator == "\367") {
    return a / b;
  }
};
//evaluate function parses the operate function and returns output
let evaluate = (op, a, b) => {
  op = operator;
  a = valueOne;
  b = valueTwo;
  c = prevVal;
  display.textContent = operate(a, b);
};

//multiple operations at once
let multiOp = () => {};

let test = () => {
  valueOne = prevVal;
};
//
let currentValue = () => {
  prevVal = parseInt(display.textContent);
};

//storeValOne function gets display textContent when an operator is pressed for first time
let storeValOne = () => {
  if (operator == "") {
    valueOne = parseInt(display.textContent);
  }
};

/*storeValTwo function gets display textContent when equals is pressed 
or when second operator is pressed*/

let storeValTwo = () => {
  if (operator !== "") {
    valueTwo = parseInt(display.textContent);
  }
};

//to pick up where left off
/*working on multiple operations (multiOp)
must get prevVal worked into operate function arguments
when operand is not empty and value one and two are not empty */
