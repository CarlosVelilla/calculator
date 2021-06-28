// DARK MODE

const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("click", changeTheme)

function changeTheme() {
  document.getElementById("calculator").classList.toggle("dark")
  document.getElementById("equal").classList.toggle("dark")
  document.getElementById("displayNums").classList.toggle("dark")
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

// CLEAR FUNCTION

let clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", clearOperation)

function clearOperation() {
  operation.innerHTML = 0
  history.innerHTML = " "
}

// CHANGE OPERATOR PLUSMINUS ± FUNCTION

let plusMinus = document.getElementById("plusminus")
plusMinus.addEventListener("click", changeOperatorPlusMinus)

function changeOperatorPlusMinus() {
  if (operation.innerHTML.slice(-1) === "+") {
    console.log("es un más")
  } else if (operation.innerHTML.slice(-1) === "-") {
    console.log("es un menos")
  }
}