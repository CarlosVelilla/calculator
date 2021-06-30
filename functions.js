/* ----------------------- DARK MODE ----------------------- */

const CHECKBOX = document.getElementById("checkbox")
CHECKBOX.addEventListener("change", changeTheme)

function changeTheme() {
  document.getElementById("calculator").classList.toggle("dark")
  document.getElementById("equal").classList.toggle("dark")
  document.getElementById("displayNums").classList.toggle("dark")
  document.getElementById("decimal").classList.toggle("dark")
  document.getElementById("historyButton").classList.toggle("dark")
  let btnOperator = document.getElementsByClassName("operator")
  for (let i = 0; i < btnOperator.length; i++) {
    btnOperator[i].classList.toggle("dark")
  }
  let btnNumbers = document.getElementsByClassName("number")
  for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].classList.toggle("dark")
  }
}

/* ----------------------- OPEN/CLOSE/MINIMIZE CALCULATOR WINDOW ----------------------- */

let calculator = document.getElementById("calculator")

// CLOSE

let closeBtn = document.getElementById("closeWindow")
closeBtn.addEventListener("click", closeWindow)

function closeWindow() {
  calculator.classList.add("hidden")
}

// MINIMIZE

let minimizeBtn = document.getElementById("minimizeWindow")
minimizeBtn.addEventListener("click", minimizeWindow)

function minimizeWindow() {
  let numNotification = document.getElementById("numNotification")
  calculator.classList.add("hidden")
  numNotification.classList.remove("hidden")
}

// OPEN

let calculatorIcon = document.getElementById("calculatorLogoBar")
calculatorIcon.addEventListener("click", openWindow)

function openWindow() {
  calculator.classList.remove("hidden")
  numNotification.classList.add("hidden")
}

/* TO-DO: REVISAR ESTO PARA ANIMACIÓN */

/* ----------------------- LOCATE OPERATION HTML ----------------------- */

let operation = document.getElementById("operation")

/* ----------------------- LOCATE HISTORY HTML ----------------------- */

let history = document.getElementById("history")

/* ----------------------- ADD OPERATORS TO OPERATION ----------------------- */

let operator = document.getElementsByClassName("operator")
for(let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", addOperator)
}

function addOperator() {
  if (operation.innerHTML.slice(-1) === "+" ||
      operation.innerHTML.slice(-1) === "-" ||
      operation.innerHTML.slice(-1) === "*" ||
      operation.innerHTML.slice(-1) === "/" ||
      operation.innerHTML.slice(-1) === "%"
  ) {}
  else {
    operation.innerHTML += this.value
  }
}

/* TO-DO: REVISAR SI HAY UNA FORMA MÁS EFICIENTE DE EVITAR ÚLTIMO DÍGITO OPERADOR */

/* ----------------------- ADD NUMBERS TO OPERATION ----------------------- */

let numberCalc = document.getElementsByClassName("number")
for(let i = 0; i < numberCalc.length; i++) {
  numberCalc[i].addEventListener("click", addNumber)
}

function addNumber() {
  if (operation.innerHTML === "0") {
    operation.innerHTML = this.value
  } else {
    operation.innerHTML += this.value
  }
}

/* ----------------------- ADD DECIMAL TO OPERATION ----------------------- */

let decimal = document.getElementById("decimal")
decimal.addEventListener("click", addDecimal)

function addDecimal() {
  if (!operation.innerHTML.includes(".")) {
    operation.innerHTML += this.value
  }
}

/* ----------------------- CLEAR FUNCTION ----------------------- */

let clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", clearOperation)

function clearOperation() {
  operation.innerHTML = 0
  history.innerHTML = ""
}

/* ----------------------- CHANGE OPERATOR - PLUSMINUS ± FUNCTION ----------------------- */

let plusMinus = document.getElementById("plusminus")
plusMinus.addEventListener("click", changeOperatorPlusMinus)

function changeOperatorPlusMinus() {
  if (operation.innerHTML.charAt(0) == "-") {
    operation.innerHTML = operation.innerHTML *- 1
  } else if (
    operation.innerHTML.includes("+") ||
    operation.innerHTML.includes("-") ||
    operation.innerHTML.includes("*") ||
    operation.innerHTML.includes("/") ||
    operation.innerHTML.includes("%")
  ) {}
  else {
    operation.innerHTML = operation.innerHTML *- 1
  }
}

/* OPERATION LOG */

let operLog = []

/* EQUAL FUNCTION */

let equal = document.getElementById("equal")
equal.addEventListener("click", solveOperation)

function solveOperation() {
  let currentOperation = operation.innerHTML
  history.innerHTML = currentOperation
  let result = eval(operation.innerHTML)
  operation.innerHTML = result
  /* AÑADIMOS LA OPERACIÓN AL LOG */
  operLog.push({order: operLog.length+1, operation: currentOperation, result: result})
}

/* HISTORY CONSOLE LOG */

let historyBtn = document.getElementById("historyButton")
historyBtn.addEventListener("click", consoleLogOperations)
let operSummary = document.getElementById("operSummary")

function consoleLogOperations() {
  console.log(operLog)

  let operations = []
  for (i = 0; i < operLog.length; i++) {
    operations += `<span class="bold textAlignRight">Operation#${operLog[i].order}</span>: Operation: ${operLog[i].operation} | Result: ${operLog[i].result}</span><br>`
  }
  operSummary.innerHTML = `<p>KiCarlSoft PowerShell<br>Copyright (C) KiCarlSoft Corporation.<br>Todos los derechos reservados.<br>------------------------------<br><br>${operations}</p>`
  operSummary.classList.toggle("show")
}