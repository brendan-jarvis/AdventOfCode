import { readFileSync } from 'fs'

let input = readFileSync('DayTwoInput.txt').toString().split('\n')

// Part One
let scores = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 }

let myScore = input.reduce((score, round) => {
  let a
  const [elf, player] = round.split(' ')
  score +=
    [3, 0, 6][(a = scores[elf] - scores[player]) < 0 ? 3 - Math.abs(a) : a] +
    scores[player]
  return score
}, 0)

// Part Two

// const moves = { A: 1, B: 2, C: 3 }
// const results = { X: -1, Y: 0, Z: 1 }

// let myScore = input.reduce((score, round) => {
//   const [elf, outcome] = round.split(' ')
//   let a, b
//   const counter =
//     Object.keys(moves)[
//       (b = Object.keys(moves).indexOf(elf) + results[outcome]) < 0
//         ? 3 - Math.abs(b)
//         : b > 2
//         ? 3 - b
//         : b
//     ]
//   score +=
//     [3, 0, 6][(a = moves[elf] - moves[counter]) < 0 ? 3 - Math.abs(a) : a] +
//     moves[counter]
//   return score
// }, 0)

console.log(myScore)
