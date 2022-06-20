const calc = {
  displayValue: "0",
  firstInput: null,
  waitForSecondInput: false,
  operator: null,
};
function updateDisplayOp() {
  const display = document.querySelector(".calc-display");
  display.textContent = calc.operator;
}

function updateDisplay() {
  const display = document.querySelector(".calc-display");
  display.textContent = calc.displayValue;
}
updateDisplay();

//statement to filter what button is pressed
const keys = document.querySelector(".calc-buttons");

keys.addEventListener("click", (event) => {
  const selected = event.target;
  if (!selected.closest("button")) {
    return;
  }
  if (selected.classList.contains("operator")) {
    manageOperator(selected.textContent);
    updateDisplayOp();
    return;
  }
  if (selected.classList.contains("decimal")) {
    inputDecimal(selected.textContent);
    updateDisplay();
    return;
  }
  if (selected.classList.contains("clear")) {
    console.log("clear", selected.textContent);
    clear();
    return;
  } else {
    inputNumber(selected.textContent);
    updateDisplay();
  }
});

//updating screen with digits
function inputNumber(num) {
  const { displayValue, waitForSecondInput } = calc;
  if (waitForSecondInput === true) {
    calc.displayValue = num;
    calc.waitForSecondInput = false;
  } else {
    calc.displayValue = displayValue === "0" ? num : displayValue + num;
  }
  console.log(calc);
}
updateDisplay();

//handling a decimal input
function inputDecimal(val) {
  if (!calc.displayValue.includes(val)) {
    calc.displayValue += val;
  }
}

//handling operators
function manageOperator(Oper) {
  const { firstInput, displayValue, operator } = calc;
  const input = parseFloat(displayValue);
  if (firstInput === null) {
    calc.firstInput = input;
  } else if (operator) {
    const output = performCalc[operator](firstInput, input);
    calc.displayValue = string(output);
  } else calc.waitForSecondInput = true;
  calc.operator = Oper;
  console.log(calc);
}

const performCalc = {
  "/": (firstInput, secondInput) => firstInput / secondInput,
  "*": (firstInput, secondInput) => firstInput * secondInput,
  "+": (firstInput, secondInput) => firstInput + secondInput,
  "-": (firstInput, secondInput) => firstInput - secondInput,
  "=": (firstInput, secondInput) => secondInput,
};
