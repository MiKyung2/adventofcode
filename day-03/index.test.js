import { part1 } from './index'

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

describe('Solve1', () => {
  it('part1', () => {
    expect(part1(input)).toEqual(4361);
  });
});
