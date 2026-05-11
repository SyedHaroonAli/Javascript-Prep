// Problem 1
function add(a, b) {
  return a + b
}

// Problem 2
function checkEvenOdd(a) {
  return a % 2 === 0
}

// Problem 3
function reverseAString(a) {
  // Easiest solution
  // return a.reverse()

  // Alternative - O(n) -TC
  const b = a.split('')
  const result = []
  for (let i = b.length - 1; i >= 0; i--) {
    result.push(b[i])
  }
  return result.join('')
}

// Problem 4
function findLargest(arrayOfNumbers) {
  // Easiest Solution - O(nLog(n)) - TC
  // return arrayOfNumbers.sort((a,b)=>a-b)[arrayOfNumbers.length-1]

  // Alternative - Best Case - O(1) - Worst Case O(n) -TC
  let largest = arrayOfNumbers[0]
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    largest = Math.max(largest, arrayOfNumbers[i])
  }
  return largest
}

// Problem 5
function countVowels(input) {
  // Easiest Solution
  // const countVowels = str => ;[...str.toLowerCase()].filter((char) => 'aeiou'.includes(char)).length

  // Alternative 1 - O(n * k) -TC
  let count = 0
  let vowelArray = ['a', 'e', 'i', 'o', 'u']
  let i = 0
  while (i < input.length) {
    if (vowelArray.includes(input[i].toLowerCase())) {
      count++
    }
    i++
  }
  return count

  // Alternative 2 - O(n) -TC
  // let count = 0
  // let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
  // let i = 0
  // while (i < input.length) {
  //   if (vowelSet.has(input[i].toLowerCase())) {
  //     count++
  //   }
  //   i++
  // }
  // return count
}
