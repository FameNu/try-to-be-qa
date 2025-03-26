import * as readline from 'readline'
import FizzBuzz from './src/FizzBuzz'
import { INPUT_MODE } from './src/config/inputMode'
import isNumber from './src/utils/isNumber'

// default input mode is string
const inputMode = INPUT_MODE.STRING

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter a number: ', (answer) => {
  if (inputMode === INPUT_MODE.NUMBER && !isNumber(answer)) {
    console.log(new FizzBuzz(parseFloat(answer)).getResult())
  } else {
    console.log(new FizzBuzz(answer).getResult())
  }
  rl.close()
})
