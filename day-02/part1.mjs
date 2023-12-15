export const extractNumbers = (str) => {
  return (str.match(/\d/gi) || []).join('')
}

const getStartEndNumberStr = (str) => {
  const numbers = extractNumbers(str)
  if (numbers.length === 1) return Number(numbers[0] + numbers[0])
  return Number(numbers.slice(0,1) + numbers.slice(-1))
}

export const part1 = (inputs) => {
  const formattedInputs = inputs.trim().split('\n').filter((v) => v)
  return formattedInputs.reduce(
    (a, c) => Number(a) + getStartEndNumberStr(c),
  0)
}