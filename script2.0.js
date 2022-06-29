let valueOne = "";
let valueTwo = "";
let prevVal = "";
let operator = "";
let temp = "";
let counter = "";
<<<<<<< HEAD
=======
let result = "";
>>>>>>> e4dcd93 (updated script)

const buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.textContent == "C") {
    clear();
  }
  if (e.target.textContent == "=") {
    evaluate(operator, valueOne, valueTwo);
    currentValue();
<<<<<<< HEAD
    // once equals pressed, value += disp.textcontent
    equalsDispUpdate();
    operator = "";
=======
    equalsDispUpdate();
>>>>>>> e4dcd93 (updated script)
  }
  if (e.target.textContent == "+") {
    operator = "+";
    updateDisplayOp(operator);
    multiOp(operator, valueOne, valueTwo);
<<<<<<< HEAD
=======
    multiEval2(operator, valueOne, valueTwo);
>>>>>>> e4dcd93 (updated script)
  }
  if (e.target.textContent == "-") {
    operator = "-";
    updateDisplayOp(operator);
    multiOp(operator, valueOne, valueTwo);
  }
  if (e.target.textContent == "x") {
    operator = "x";
    updateDisplayOp(operator);
    multiOp(operator, valueOne, valueTwo);
  }
  if (e.target.textContent == "\367") {
    operator = "\367";
    updateDisplayOp(operator);
    multiOp(operator, valueOne, valueTwo);
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

  console.log(valueOne, "value one");
  console.log(operator);
  console.log(valueTwo, "value two");
  console.log(prevVal, "prevVal");
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

  if (
    display.textContent == "+" ||
    display.textContent == "-" ||
    display.textContent == "\367" ||
    display.textContent == "x"
  ) {
    display.textContent += input.textContent;
  } else {
    display.textContent = input.textContent;
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
  valueOne = "";
  valueTwo = "";
  prevVal = "";
  operator = "";
  counter = "";
}

//operate function returns selected operation output
let operate = (op, a, b) => {
  if (op == "+") {
    return a + b;
  }
  if (op == "-") {
    return a - b;
  }
  if (op == "x") {
    return a * b;
  }
  if (op == "\367") {
    return a / b;
  }
};
//evaluate function parses the operate function and returns output
let evaluate = (op, a, b) => {
  display.textContent = operate(op, a, b);
};

let multiEval = (op, a, b) => {
<<<<<<< HEAD
  valueOne = operate(op, a, b);
=======
  prevVal = operate(op, a, b);
};

let multiEval2 = (op, a, b) => {
  prevVal = operate(op, a, b);
>>>>>>> e4dcd93 (updated script)
};

//multiple operations at once
let multiOp = (op, a, b) => {
<<<<<<< HEAD
  if (op != "" && a != "" && b != "") {
    multiEval(op, a, b);
    counter++;
    console.log("works");
  }
};

=======
  if (prevVal == "" && op != "" && a != "" && b != "") {
    multiEval(op, a, b);

    console.log("works");
  } else if (prevVal != "" && op != "" && a != "" && b != "") {
    valueOne = parseInt(prevVal);
    multiEval2(op, a, b);
    console.log("works2");
    counter++;
  }
};
let test = (op, a, b) => {
  result = operate(op, a, b);
  display.textContent = result;
};
>>>>>>> e4dcd93 (updated script)
let equalsDispUpdate = () => {
  valueOne = prevVal; //working here!!
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
