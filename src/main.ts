import './style.css'

const numberOfCupsOfCoffee = 3
const fullName = 'Samuel Gonzalez'

console.log(
  `${fullName} drinks ${numberOfCupsOfCoffee} cups of 
  coffee each day.`
)

const aboutMe = {
  fullName: 'Samuel Gonzalez',
  luckyNumber: 56,
  favoriteMovies: ['Forrest Gump', 'Kill Bill', 'Back to The Future'],
}

console.log(aboutMe)

const userName = window.prompt("Hello! What's your name?")

console.log(`Greetings, ${userName}.`)

const firstOperand = Number(window.prompt('Please enter the first number'))

const secondOperand = Number(window.prompt('Please enter the second number'))

const sum = firstOperand + secondOperand

const difference = firstOperand - secondOperand

const product = firstOperand * secondOperand

const quotient = firstOperand / secondOperand

const remainder = firstOperand % secondOperand

console.log(
  `Your two numbers are ${firstOperand} and ${secondOperand}. 
  \nTheir total is ${sum}.
  \n${firstOperand} minus ${secondOperand} is ${difference}.
  \nTheir product when multiplied is ${product}.
  \n${firstOperand} divided by ${secondOperand} is ${quotient}.
  \nAfter dividing, the remainder is ${remainder}.`
)
