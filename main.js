const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculatorDisplay = document.querySelector(".calculator__display")
const equalSign = document.querySelector('.equal')
const clearBtn = document.querySelector('.ac-clear')


let firstNumber = ''
let calcOperator = ''
let secondNumber = ''

const inputNumber = (number) => {
    if (secondNumber === '') {
      secondNumber = number
    } else {
      secondNumber += number
    }
    
    console.log(secondNumber);
  }

  const inputOperator = (operator) => {
    if (calcOperator === '') {
      firstNumber = secondNumber
    }
    calcOperator = operator
    secondNumber = ''
  }
  
 ///////// parseFloat - returns a number
  const calculate = () => {
    let result = 0
    switch(calcOperator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber)
        break
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber)
        break
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber)
        break
      case '/':
        result = parseFloat(firstNumber) / parseFloat(secondNumber)
        break
      default:
        return
    }
    secondNumber = result.toString()
    calcOperator = ''
    firstNumber = ''
  }
  
  const clearAll = () => {
    firstNumber = ''
    calcOperator = ''
    secondNumber = ''
  }
  
  const updateScreen = (number) => {
    calculatorDisplay.value = number
  }
  
  numbers.forEach((number) => {
    number.addEventListener(("click"), (event) => {
      inputNumber(event.target.value)
      updateScreen(secondNumber)
    })
  })
  
  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      inputOperator(event.target.value)
    })
  })
  
  equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(secondNumber)
  })
  
  clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(secondNumber)
  })
