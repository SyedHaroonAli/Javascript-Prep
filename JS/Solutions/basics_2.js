// Problem 1
const isPalindrome = (inputString) => {
  // Easiest Solution - TC: O(n) SC: O(n)
  // let a = inputString.split('').reverse().join('')
  // return inputString === a

  // Alternative Solution - Two Pointer Method - TC: O(n/2) SC: O(1) * DSA Approved Solution
  if (inputString[0] !== inputString[inputString.length - 1]) return false

  let i = 0,
    j = inputString.length - 1

  while (i < j) {
    if (inputString[i] !== inputString[j]) return false
    i++
    j--
  }
  return true
}

// Problem 2
const fizzBuzz = () => {
  // Array based solution - :P
  // Array.from({ length: 100 }).forEach((_, index) => {
  //   const num = index + 1
  //   if (num % 15 === 0) {
  //     console.log('FizzBuzz')
  //   } else if (num % 3 === 0) {
  //     console.log('Fizz')
  //   } else if (num % 5 === 0) {
  //     console.log('Buzz')
  //   } else {
  //     console.log(num)
  //   }
  // })

  // Proper Solution - TC: O(n) SC: O(1)
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

// Problem 3
const removeDuplicates = (arrayWithDups) => {
  // Easiest Solution -TC: O(n) SC: O(n)
  // return [...new Set(arrayWithDups)]

  // Solution#1 - TC: O(n²) SC: O(n)
  const result = []
  for (let i = 0; i < arrayWithDups.length; i++) {
    if (!result.includes(arrayWithDups[i])) {
      result.push(i)
    }
  }
  return result
}

// Problem 4
const charFrequency = (inputString) => {
  // Map Based Solution - TC: O(n), SC: O(k)
  // const charMap = new Map()
  // for (const char of inputString) {
  //   charMap.set(char, (charMap.get(char) || 0) + 1)
  // }
  // return charMap

  // Object Based Solution
  // TC: O(n), SC: O(k)
  const charMap = {}
  for (const char of inputString) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  return charMap
}

// Problem 5
const flattenArray = (nestedArray) => {
  // Easiest Solution - N level Flattening. Makes you look cool! B)
  // TC: O(n), SC: O(n)
  // return nestedArray.flat(Infinity)

  // One Level Flattening - Array Method
  // TC: O(n), SC: O(n)
  const result = []
  for (const node of nestedArray) {
    if (Array.isArray(node)) {
      result.push(...node)
      continue
    }
    result.push(node)
  }
  return result

  // N Level Flattening - Array Method - * DSA Approved
  // TC: O(n), SC: O(n)
  // const stack = [...arr]
  // const result = []

  // while (stack.length) {
  //   const current = stack.pop()

  //   if (Array.isArray(current)) {
  //     stack.push(...current)
  //   } else {
  //     result.push(current)
  //   }
  // }
  // return result.reverse()
}
