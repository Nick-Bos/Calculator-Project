const calc = {
  displayValue: "0",
  fistInput: null,
  waitForSecondInput: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector(".calc-display");
  display.value = calc.displayValue;
}
updateDisplay();

//statement to filter what button is pressed
const keys = document.querySelector(".calc-buttons");

keys.addEventListener("click", (e) => {
  const selected = e;
  if (!selected.matches("button")) {
    return;
  }
  if (selected.classList.contains("operator")) {
    console.log("operator", selected.value);
    return;
  }
  if (selected.classList.contains("decimal")) {
    inputDecimal(selected.value);
    updateDisplay();
    return;
  }
  if (selected.classList.contains("clear")) {
    console.log("clear", selected.value);
    return;
  } else {
    inputNumber(choosen.value);
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

//managing operators
function manageOperator(Oper) {
  const { fistInput, displayValue, operator } = calc;
  const input = parseFloat(displayValue);
  if (fistInput === null) {
    calc.fistInput = input;
  } else calc.waitForSecondInput = true;
  calc.operator = Oper;
}
//change button class to groups
