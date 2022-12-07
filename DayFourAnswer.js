import { readFileSync } from 'fs'

console.log(
  readFileSync('DayFourInput.txt')
    .toString()
    .split('\n')
    .map((pair) => {
      const [elf1Range, elf2Range] = pair.split(',')
      const [elf1RangeFrom, elf1RangeTo] = elf1Range
        .split('-')
        .map((val) => Number(val))
      const [elf2RangeFrom, elf2RangeTo] = elf2Range
        .split('-')
        .map((val) => Number(val))
      return (
        (elf1RangeFrom >= elf2RangeFrom && elf1RangeTo <= elf2RangeTo) ||
        (elf2RangeFrom >= elf1RangeFrom && elf2RangeTo <= elf1RangeTo)
      )
    })
    .filter((contained) => contained).length
)
