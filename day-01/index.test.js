import { part1 } from './part1'
import { part2 } from './part2'

const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const input2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

describe('Solve1', () => {
  it('각 줄에서 첫 번째 숫자 와 마지막 숫자 (순서대로)를 결합하여 단일 두 자리 숫자를 모두 더한 값 출력', () => {
    expect(part1(input.trim().split('\n').filter((v) => v))).toEqual(142);
  });
});

describe('Solve2', () => {
  it('Solve2에서 영문 숫자를 숫자로 바꾸어 계산', () => {
    expect(part2(input2.trim().split('\n').filter((v) => v))).toEqual(281);
  });
});
