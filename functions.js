// DARK MODE

const CHECKBOX = document.getElementById("checkbox")
CHECKBOX.addEventListener("click", changeTheme)

function changeTheme() {
  document.getElementById("calculator").classList.toggle("dark")
  document.getElementById("equal").classList.toggle("dark")
  document.getElementById("displayNums").classList.toggle("dark")
  document.getElementById("decimal").classList.toggle("dark")
  document.getElementById("historyButton").classList.toggle("dark")
  let operator = document.getElementsByClassName("operator")
  for (let i = 0; i < operator.length; i++) {
    operator[i].classList.toggle("dark")
  }
  let btnNumbers = document.getElementsByClassName("number")
  for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].classList.toggle("dark")
  }
}

// OPEN/CLOSE CALCULATOR WINDOW

let calculator = document.getElementById("calculator")

let calculatorIcon = document.getElementById("calculatorLogoBar")
calculatorIcon.addEventListener("click", openWindow)

function openWindow() {
  calculator.classList.remove("hidden")
}

let closeBtn = document.getElementById("closeWindow")
closeBtn.addEventListener("click", closeWindow)

function closeWindow() {
  calculator.classList.add("hidden")
}

// MINIMIZE WINDOW

let minimizeBtn = document.getElementById("minimizeWindow")
minimizeBtn.addEventListener("click", minimizeWindow)

function minimizeWindow() {
  calculator.classList.add("hidden")
}

// TODO REVISAR TODO ESTO PARA ANIMACIÓN / AÑADIR INDICADOR A LA BARRA DE SISTEMA DE ELEMENTO MINIMIZADO

// LOCATE OPERATION HTML

let operation = document.getElementById("operation")

// LOCATE HISTORY HTML

let history = document.getElementById("history")

// ADD OPERATORS TO OPERATION

let operator = document.getElementsByClassName("operator")
for(let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", addOperator)
}

function addOperator() {
  if (operation.innerHTML.slice(-1) === "+" ||
      operation.innerHTML.slice(-1) === "-" ||
      operation.innerHTML.slice(-1) === "*" ||
      operation.innerHTML.slice(-1) === "/"
  ) {} else {
    operation.innerHTML += this.value
  }
}

// TODO REVISAR SI HAY UNA FORMA MÁS EFICIENTE DE EVITAR ÚLTIMO DÍGITO OPERADOR

// ADD NUMBERS TO OPERATION

let numberCalc = document.getElementsByClassName("number")
for(let i = 0; i < numberCalc.length; i++) {
  numberCalc[i].addEventListener("click", addNumber)
}

function addNumber() {
  if (operation.innerHTML == 0) {
    operation.innerHTML = this.value
  } else {
    operation.innerHTML += this.value
  }
}

// ADD DECIMAL TO OPERATION

let decimal = document.getElementById("decimal")
decimal.addEventListener("click", addDecimal)

function addDecimal() {
  if (operation.innerHTML.includes(".")) {}
  else {
  operation.innerHTML += this.value
  }
}

// CLEAR FUNCTION

let clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", clearOperation)

function clearOperation() {
  operation.innerHTML = 0
  history.innerHTML = ""
}

// CHANGE OPERATOR PLUSMINUS ± FUNCTION

let plusMinus = document.getElementById("plusminus")
plusMinus.addEventListener("click", changeOperatorPlusMinus)


function changeOperatorPlusMinus() {
  operation.innerHTML = operation.innerHTML *- 1

//   NOTE TO SELF: TRY ANOTHER FUNCTION (IF OPERATION ENDS IN + TOGGLES TO - AND VICEVERSA)
//   if (operation.innerHTML.slice(-1) === "+") {
//     operation.innerHTML.slice(-1)
//   } else if (operation.innerHTML.slice(-1) === "-") {
//     console.log("es un menos")
//   }
}

// OPERATION LOG

let operationsAccomplished = []

// EQUAL FUNCTION

let equal = document.getElementById("equal")
equal.addEventListener("click", solveOperation)

function solveOperation() {
  let currentOperation = operation.innerHTML
  history.innerHTML = currentOperation
  let result = eval(operation.innerHTML)
  operation.innerHTML = result
  // AÑADIMOS LA OPERACIÓN AL LOG
  operationsAccomplished.push({operation: currentOperation, result: result})
}

// HISTORY CONSOLE LOG

let historyBtn = document.getElementById("historyButton")
historyBtn.addEventListener("click", consoleLogOperations)

function consoleLogOperations() {
  console.log(operationsAccomplished)
}