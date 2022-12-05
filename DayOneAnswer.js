import fs from 'fs'
// Read data from file
const data = fs.readFileSync('DayOneInput.txt', 'utf8')

let elf = 1
let elfCalories = 0
let maxCalories = 0
let maxCaloriesElf = 0
let elfCaloriesArray = []

data.split(/\r?\n/).forEach((value, index) => {
  if (value === '') {
    elfCaloriesArray.push(elfCalories)
    elf++
    elfCalories = 0
  } else {
    elfCalories += parseInt(value, 10)
  }

  if (elfCalories > maxCalories) {
    maxCalories = elfCalories
    maxCaloriesElf = elf
  }
})

elfCaloriesArray.sort((a, b) => {
  return b - a
})

console.log(
  'Elf ' + maxCaloriesElf + ' has the most calories at ' + maxCalories
)

console.log(elfCaloriesArray[0], elfCaloriesArray[1], elfCaloriesArray[2])
