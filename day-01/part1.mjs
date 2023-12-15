export const extractNumbers = (str) => {
  return (str.match(/\d/gi) || []).join('')
}

const getStartEndNumberStr = (str) => {
  const numbers = extractNumbers(str)
  return Number(numbers.slice(0,1) + numbers.slice(-1))
}

export const part1 = (inputs) => {
  return inputs.reduce(
    (a, c) => Number(a) + getStartEndNumberStr(c),
  0)
}