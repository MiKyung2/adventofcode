import { extractNumbers } from './part1.mjs'

const ALPHABET_NUMBER = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}
const ALPHABETS = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const alphabetToNumber = (str) => {
  let result = str
  let position = 0;
  for (const _ of result) {
    for (const alp of ALPHABETS) {
      if (result.slice(position).startsWith(alp)) {
        result =  result.replace(alp, ALPHABET_NUMBER[alp])
        break;
      }
    }
    position += 1
  }

  return result
}

const getStartEndNumberStr = (str) => {
  const numberString = alphabetToNumber(str)
  console.log('numbers : ', numberString)
  const numbers = extractNumbers(numberString)
  return Number(numbers.slice(0,1) + numbers.slice(-1))
}

export const part2 = (inputs) => {
  return inputs.reduce(
    (a, c, i) => {
      console.log({i})
      console.log('str : ', c)
      const test =  getStartEndNumberStr(c)
      console.log('num : ', test)
      console.log('sum : ', a + test)
      return Number(a) + test
    },
  0)
}