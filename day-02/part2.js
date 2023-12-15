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
  ALPHABETS.forEach((a) => {
    if (result.includes(a)) {
      result =  result.replaceAll(a, ALPHABET_NUMBER[a])
    }
  })

  return result
}

const getStartEndNumberStr = (str) => {
  const numberString = alphabetToNumber(str)
  const numbers = extractNumbers(numberString)
  
  if (numbers.length === 1) return Number(numbers[0] + numbers[0])
  return Number(numbers.slice(0,1) + numbers.slice(-1))
}

export const part2 = (inputs) => {
  const formattedInputs = inputs.trim().split('\n').filter((v) => v)
  return formattedInputs.reduce(
    (a, c) => Number(a) + getStartEndNumberStr(c),
  0)
}