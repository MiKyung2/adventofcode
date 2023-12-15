import { getInput } from '../utils/index.js';
import { Matrix } from './matrix.js'

const points = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]]
export const part1 = (matrix) => {
  const matrix2x2 = new Matrix(matrix.trim().split('\n').filter((v) => v))

  const iterator = matrix2x2[Symbol.iterator]()
  let iterationResult = iterator.next()

  const markSet = [];
  while (!iterationResult.done) {
    const { value, row, col } = iterationResult.value;
  
    if (value != '.' && !isNumber(value)) {
      for (let i = 0; i < points.length; i++) {
        const x = row + points[i][0];
        const y = col + points[i][1];
        if (x < 0 || y <  0) {}
        else markSet.push([x, y])
      }
    }
    iterationResult = iterator.next()
  }

  let sum = 0;
  const { data } = matrix2x2;
  for (let i = 0; i < data.length; i++) {
    let stack = ''
    let isValid = false
    for(let j = 0; j < data[i].length; j++) {
      if (isNumber(data[i][j])) {
        stack += data[i][j]
        if (markSet.find(([row, col]) => row === i && col === i)) {
          isValid = true
        }
      }
      if ((!isNumber(data[i][j]) && stack !== '') || j == data[i].length - 1) {
        if (isValid) {
          console.log({stack})
          sum += Number(stack)
          stack = ''
          isValid = false
        }
      }
    }
  }

  console.log({sum})
  return sum;
}

if (process.env.NODE_ENV !== 'test') {
  const inputs = getInput(import.meta.url);
  const answer1 = part1(inputs);
  // console.log(`#1 ${answer1}}`);
}

function isNumber(value) {
  const _value = Number(value)
  return typeof _value === 'number' && !isNaN(_value);
}