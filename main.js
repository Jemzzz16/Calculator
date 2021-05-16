// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalButtons = document.querySelector("[data-equal]");
// const clearButtons = document.querySelector("[data-clear]");
// const operandButtons = document.querySelector("[data-operand]");

const display = document.querySelector('.calculator__display')
const clear = document.querySelector('.clear')
const keys = document.querySelector(".calculator__keys");
const calculator = document.querySelector('.calculator')


keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const { type } = key.dataset
    const { previousKeyType } = calculator.dataset

    // number keys
   if (type === 'number') { 
    if (displayValue === '0') {
        display.textContent = keyValue 
     } else if (previousKeyType === 'operator') // allows for refresh after operator key
        {
        display.textContent = keyValue
     } else {
        display.textContent = displayValue + keyValue
        };
        calculator.dataset.previousKeyType = 'number' // refresh from remember operator to number 
    }   
        
    // operator keys
    if (type === 'operator') {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(el => {el.dataset.state = ''})  // el -> element 
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = display
        calculator.dataset.operator = key.dataset.key
       
    }
     // calculation
    if (type === 'equal') {
        const firstNumber = pasteInt(calculator.dataset.firstNumber)
        const operator = calculator.dataset.operator
        const secondNumber = pasteInt(displayValue)

        let result = ''
        if (operator === 'plus') result = firstNumber + secondNumber
        // firstNumber * secondNumber 
        // firstNumber - secondNumber
        // firstNumber + secondNumber
        // firstNumber / secondNumber

        display.textContent = result
    }
    calculator.dataset.previousKeyType = type
}); 