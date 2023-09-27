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

const numbers = [
  42732, 22851, 24873, 13076, 44845, 47133, 12254, 16328, 16932, 44661, 25916,
  28036, 39507, 21421, 45572, 32505, 35213, 24584, 30566, 15729, 49562, 25278,
  40304, 14259, 13703, 24074, 11000, 11696, 10704, 47769, 38810, 14167, 44816,
  35240, 26640, 46098, 32329, 47424, 21314, 29387, 12259, 42208, 35844, 22667,
  21379, 38401, 38985, 26982, 14071, 48770, 29690, 29993, 38916, 42524, 15496,
  20480, 31883, 23362, 13129, 32166, 22294, 31663, 28504, 29771, 10552, 41839,
  47414, 32745, 31356, 38547, 46372, 13083, 35983, 46358, 34354, 45733, 32958,
  27830, 29267, 10863, 43842, 18954, 10654, 31083, 21772, 43538, 30038, 42027,
  45089, 19300, 11134, 37199, 42492, 17853, 26686, 45539, 18721, 43806, 21208,
  29832,
]
