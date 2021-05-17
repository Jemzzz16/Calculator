
const display = document.querySelector('.calculator__display')
const keys = document.querySelector(".calculator__keys")
const calculator = document.querySelector('.calculator')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equal')


keys.addEventListener('click', event => {
    const key = event.target
    const type = event.target 

    console.log(type.innerHTML);  
    console.log({type});  
}); 

//display.addEventListener()