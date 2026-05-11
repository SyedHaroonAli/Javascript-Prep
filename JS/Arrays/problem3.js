// Second Largest Element ?

const input = [1325136, 412, 555246, 1234, 1325136]

// DSA - Way - ✨
let largest = input[0]
let secondLargest = null

for (let i = 1; i < input.length; i++) {
  if (input[i] > largest) {
    secondLargest = largest
    largest = input[i]
  } else if (
    input[i] < largest &&
    (secondLargest === null || input[i] > secondLargest)
  ) {
    secondLargest = input[i]
  }
}
console.log(secondLargest)
