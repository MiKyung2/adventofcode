import { part1 } from './part1'
import { part2 } from './part2'

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const input2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

describe('Solve1', () => {
  it('각 줄에서 첫 번째 숫자 와 마지막 숫자 (순서대로)를 결합하여 단일 두 자리 숫자를 모두 더한 값 출력', () => {
    expect(part1(input)).toEqual(142);
  });
});

describe('Solve2', () => {
  it('Solve2에서 영문 숫자를 숫자로 바꾸어 계산', () => {
    expect(part2(input2)).toEqual(281);
  });
});
