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
]

console.table(stacks)
