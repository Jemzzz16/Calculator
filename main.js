const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculatorDisplay = document.querySelector(".calculator__display")
const equalSign = document.querySelector('.equal')
const clearBtn = document.querySelector('.ac-clear')

//// allows for first and second numbers to change
let firstNumber = ''
let calcOperator = ''
let secondNumber = ''

//// inputNumber 
const inputNumber = (number) => {
    if (secondNumber === '') {
      secondNumber = number
    } else {
      secondNumber += number
    }
    
    console.log(secondNumber);
  }
/// input operator
  const inputOperator = (operator) => {
    if (calcOperator === '') {
      firstNumber = secondNumber
    }
    calcOperator = operator
    secondNumber = ''
  }
  
  //////// CALCULATIONS 
 ///////// parseFloat - returns a number
  ///// first + second = result 

  ///The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
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
    //// stringifier method of the Location and returns a number 
    secondNumber = result.toString()
    calcOperator = ''
    firstNumber = ''
  }
  
  //// Clearing all functions on screen '' - open string 
  const clearAll = () => {
    firstNumber = ''
    calcOperator = ''
    secondNumber = ''
  }
  
  ///// Updating the screen to display value of the number 
  const updateScreen = (number) => {
    calculatorDisplay.value = number
  }
  

  //// Allows for numbers to be displayed on screen. The target property of the Event interface is a reference to the object onto which the event was dispatched.
  /// /// addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
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
  
  //// Clearing and equals button, different events but still clear screen 
  equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(secondNumber)
  })
  
  clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(secondNumber)
  })


  ///// PROBLEMS 

  // clicking between buttons brings up NaN
  // DECIMAL POINT
  // only Performs the last calculation, ignore the first