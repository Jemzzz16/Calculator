const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculatorScreen = document.querySelector(".calculator__display")
const equalSign = document.querySelector('.equal')
const clearBtn = document.querySelector('.clear')


let firstNumber = '0'
let calcOperator = ''
let secondNumber = '0'

const inputNumber = (number) => {
    if (secondNumber === '0') {
      secondNumber = number
    } else {
      secondNumber += number
    }
  }

  const inputOperator = (operator) => {
    if (calcOperator === '') {
      firstNumber = secondNumber
    }
    calcOperator = operator
    secondNumber = '0'
  }
  
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
    firstNumber = '0'
  }
  
  const clearAll = () => {
    firstNumber = '0'
    calcOperator = ''
    secondNumber = '0'
  }
  
  
  const updateScreen = (number) => {
    calculatorScreen.value = number
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
  



  //////////////////////////////////////

// keys.addEventListener('click', event => {
//     const opKey = event.target  //operator
//     const numType = event.target  //number
//     const displayedNum = display.textContent //displaying numbers selected 
//     const keyValue = numType.textContent //key value is the number key selected
//     const type = event.target.dataset.type
    
//     if (type === 'number') {
//         if (!operator) {
            
//             if (firstNumber) {
//                 firstNumber += keyValue  
//             } else {
//                 firstNumber = keyValue
//             }
            
//         } else if (operator) {
//             if (secondNumber) {
//                 secondNumber += keyValue  
//             } else {
//                 secondNumber = keyValue

//     console.log(firstNumber);
//     console.log(secondNumber);
//     console.log(operator);
// });


// // keys.addEventListener('click', event => {
// //     const opKey = event.target  //operator
// //     const numType = event.target  //number
// //     const displayedNum = display.textContent //displaying numbers selected 
// //     const keyValue = opKey.textContent //key value is the number key selected

// //     // DISPLAY NUMBERS - this allows for number to be displayed and subsequent numbers too
// //     if (displayedNum === '0') { 
// //         display.textContent = keyValue
// //     } else {
// //         display.textContent = displayedNum + keyValue

// //     } if (numType === 'decimal') {
// //         display.textContent = displayedNum + '.'
// //     }

// //     console.log(numType.innerHTML);  
// //     console.log({numType});  