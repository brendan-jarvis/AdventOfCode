import { readFileSync } from 'fs'

const input = readFileSync('DayThreeInput.txt').toString().split('\n')

function solve(rucksacks) {
  // Initialize a sum variable to keep track of the total priority.
  let sum = 0

  // Iterate through each rucksack in the input.
  for (let rucksack of rucksacks) {
    // Find the common item types between the two compartments of the rucksack.
    let commonTypes = findCommonTypes(rucksack)

    // Iterate through each common item type.
    for (let type of commonTypes) {
      // Calculate the priority of the item type.
      let priority = calculatePriority(type)

      // Add the priority to the sum.
      sum += priority
    }
  }

  // Return the sum.
  return sum
}

function findCommonTypes(rucksack) {
  // Initialize a set to keep track of common item types.
  let commonTypes = new Set()

  // Split the rucksack into its two compartments.
  let compartments = splitRucksack(rucksack)
  let firstCompartment = compartments[0]
  let secondCompartment = compartments[1]

  // Iterate through each character in the first compartment.
  for (let character of firstCompartment) {
    // Check if the character appears in the second compartment.
    if (secondCompartment.includes(character)) {
      // If it does, add it to the set of common types.
      commonTypes.add(character)
    }
  }

  // Return the set of common types.
  return commonTypes
}

function calculatePriority(type) {
  // Get the ASCII value of the character.
  let asciiValue = type.charCodeAt(0)

  // If the character is a lowercase letter, its priority is the ASCII value minus 96.
  if (asciiValue >= 97 && asciiValue <= 122) {
    return asciiValue - 96
  }

  // If the character is an uppercase letter, its priority is the ASCII value minus 38.
  if (asciiValue >= 65 && asciiValue <= 90) {
    return asciiValue - 38
  }

  // If the character is neither a lowercase nor an uppercase letter, it has a priority of 0.
  return 0
}

function splitRucksack(rucksack) {
  // Split the rucksack into its two compartments.
  // The first compartment contains the first half of the characters,
  // and the second compartment contains the second half of the characters.
  let firstCompartment = rucksack.substring(0, rucksack.length / 2)
  let secondCompartment = rucksack.substring(rucksack.length / 2)

  // Return the compartments.
  return [firstCompartment, secondCompartment]
}

let result = solve(input)
console.log(result)
