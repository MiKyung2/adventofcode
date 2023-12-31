import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export function getInput(moduleUrl) {
  const __filename = fileURLToPath(moduleUrl);
  const __dirname = dirname(__filename);

  return (
    readFileSync(resolve(__dirname, './input.txt'), {
      encoding: 'utf-8',
    })
  );
}

export function getLCM(divisors) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let lcm = 1;

  for (const divisor of divisors) {
    lcm = (lcm * divisor) / gcd(lcm, divisor);
  }

  return lcm;
}

export function splitLines(input) {
  return input.trim().split('\n');
}

export class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export const sum = (values) => values.reduce((a, c) => a + Number(c), 0)