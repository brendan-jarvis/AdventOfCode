import { readFileSync } from 'fs'

const input = readFileSync('DayFiveInput.txt').toString().split('\n\n')[1]

const stacks = [
  'RNPG',
  'TJBLCSVH',
  'TDBMNL',
  'RVPSB',
  'GCQSWMVH',
  'WQSCDBJ',
  'FQL',
  'WMHTDLFV',
  'LPBVMJF',
].map((stack) => stack.split(''))

const moveN = (from, to, n) =>
  // stacks[to].push(...stacks[from].splice(-n).reverse())
  stacks[to].push(...stacks[from].splice(-n))

for (const line of input.split('\n')) {
  const x = line.split(' ')
  const n = +x[1]
  const from = +x[3]
  const to = +x[5]

  console.log({ from, to, n })

  moveN(from - 1, to - 1, n)
}

console.log(stacks.map((s) => s.reverse()[0]))
