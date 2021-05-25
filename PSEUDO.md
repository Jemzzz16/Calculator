<h5>PSEUDO CODE</h5>

<p>steps

1. The Look

- Colours
- Font
- Header - Name
- Paragraph?

2. Layout

- Grid systems display grid on \_\_sub-element - auto?
- Number of buttons
- Type of buttons
- 0-9

3. Functions

- Java
- CSS animation
- 1-9
- $times / AC / DEL?

## Code solutions

---

Number function
Operation function

- number - display
- number and operation - display
- Clear needs to

parent container (calculator) display keys (buttons)
grid layout to contain all the elements
buttons that container responsive elements use emmet \*17 0-9 . AC = + - &times
body H + W - mobile
background colour gradient
google fonts
box shadow for calculator

## calculator.dataset.previousKeyType = 'number' - refresh from remember operator to number

</p>

const clearBtn = document.querySelector('.all-clear')

<!-- CLEAR FUNCTION -->

})

<!-- IDENTIFYING A NUMBER -->

const inputNumber = (number) => {
if (currentInput === '0') {
currentInput = number
} else {
currentInput += number
}
}

<!-- Identifying AN OPERATOR  -->

const inputOperator = (operator) => {
if (calculationOperator === '') {
prevInput = currentInput
}
calculationOperator = operator
currentInput = '0'
}

<!-- CALCULATIONS -->

const calculate = () => {
let result = 0
switch(calculationOperator) {
case '+':
result = parseFloat(prevInput) + parseFloat(currentInput)
break

/\* if 80085 is typed something needs to happen

const boobs = (boob) => {

}
java pop up needs 80085 clicks to close - naughty

on click change back ground colour

666 devil emoji pops up

const boobs = () => {
if (boobs === '80085') {
return "BOOBS"
}
}

//////////////////////////////////////

// keys.addEventListener('click', event => {
// const opKey = event.target //operator
// const numType = event.target //number
// const displayedNum = display.textContent //displaying numbers selected
// const keyValue = numType.textContent //key value is the number key selected
// const type = event.target.dataset.type

// if (type === 'number') {
// if (!operator) {

// if (firstNumber) {
// firstNumber += keyValue  
// } else {
// firstNumber = keyValue
// }

// } else if (operator) {
// if (secondNumber) {
// secondNumber += keyValue  
// } else {
// secondNumber = keyValue

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(operator);
// });

// // keys.addEventListener('click', event => {
// // const opKey = event.target //operator
// // const numType = event.target //number
// // const displayedNum = display.textContent //displaying numbers selected
/// const keyValue = opKey.textContent //key value is the number key selected

// // DISPLAY NUMBERS - this allows for number to be displayed and subsequent numbers too
// if (displayedNum === '0') {
// display.textContent = keyValue
// } else {
// display.textContent = displayedNum + keyValue

// } if (numType === 'decimal') {
// display.textContent = displayedNum + '.'
// }

// console.log(numType.innerHTML);  
// console.log({numType});
