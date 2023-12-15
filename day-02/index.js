import { getInput, sum } from '../utils/index.js';

const formatInput = (input) => {
  const match = input.match(/Game (\d+): /);
  const gameIndex = match[1]
  const games = input.replace(match[0], '').split('; ')

  let maxRed = 0;
  let maxBlue = 0;
  let maxGreen = 0;
  games.map((game) => {
    const red = game.match(/(\d+) red/)?.[1];
    const blue = game.match(/(\d+) blue/)?.[1];
    const green = game.match(/(\d+) green/)?.[1];
    maxRed = Math.max(red || 0, maxRed)
    maxBlue = Math.max(blue || 0, maxBlue)
    maxGreen = Math.max(green || 0, maxGreen)
  })

  return {
    [gameIndex]: { red: maxRed, blue: maxBlue, green: maxGreen }
  }
}

const getAvailableGames = (games, ableGame) => {
  const availableGames = []
  for (const game of games) {
    const [index, value] = Object.entries(game)[0];
    if ((value?.red || 0) <= ableGame.red && (value?.blue || 0) <= ableGame.blue && (value?.green || 0) <= ableGame.green) {
      availableGames.push(index)
    }
  }

  return availableGames
}

const part1 = (input) => {
  const games = getAvailableGames(input, { red: 12, green: 13, blue: 14 })
  return sum(games);
}

const part2 = (input) => {
  const multipValue = input.map((i) => {
    const value = Object.values(i)?.[0];
    return ( value?.red || 1) * (value?.blue || 1) * (value?.green || 1)
  })
  return sum(multipValue);
}

function formatted(input) { 
  return input.trim().split('\n').filter((v) => v).map((input) => formatInput(input))
}

if (process.env.NODE_ENV !== 'test') {
  const input = getInput(import.meta.url);

  const formattedInput = formatted(input)
  const answer1 = part1(formattedInput);
  const answer2 = part2(formattedInput);
  console.log(`#1 ${answer1} #2 ${answer2}`);
}