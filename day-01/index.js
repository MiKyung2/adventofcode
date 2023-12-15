import { getInput } from '../utils/index.js';
import { part1 } from './part1.mjs';
import { part2 } from './part2.js';

if (process.env.NODE_ENV !== 'test') {
  const input = getInput(import.meta.url).trim().split('\n').filter((v) => v);
  const answer1 = part1(input);
  const answer2 = part2(input);
  console.log(`#1 ${answer1} #2 ${answer2}`);
}