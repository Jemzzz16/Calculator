// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalButtons = document.querySelector("[data-equal]");
// const clearButtons = document.querySelector("[data-clear]");
// const operandButtons = document.querySelector("[data-operand]");

const display = document.querySelector('.calculator__display')
const clear = document.querySelector('.clear')

const keys = document.querySelector(".calculator__keys");

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent

    // number key
   if (key.classList.contains ('number')) { 
    if (displayValue === '0') {
        display.textContent = keyValue 
     } else {
        display.textContent = displayValue + keyValue
        };
    }   
        
    // operator key
    if (key.classList.contains ('operator')) {
        console.log(key);
    }

}); 