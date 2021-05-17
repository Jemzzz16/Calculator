
const display = document.querySelector('.calculator__display')
const keys = document.querySelector(".calculator__keys")
const calculator = document.querySelector('.calculator')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equal')

////////// calculator -> (1) listen for all key presses(2) determine the type of key

keys.addEventListener('click', event => {
    const opKey = event.target  //operator
    const numType = event.target  //number
    const displayedNum = display.textContent //displaying numbers selected 
    const keyValue = opKey.textContent //key value is the number key selected

    // DISPLAY NUMBERS - this allows for number to be displayed and subsequent numbers too
    if (displayedNum === '0') { 
        display.textContent = keyValue
    } else {
        display.textContent = displayedNum + keyValue

    } if (numType === 'decimal') {
        display.textContent = displayedNum + '.'
      
    }

    console.log(numType.innerHTML);  
    console.log({numType});  
        
});