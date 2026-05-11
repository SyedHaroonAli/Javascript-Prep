// Problem 1
const validParenthesis = (string) => {
  // Solution - 1, TC: O(n), SC: O(n) - *DSA Approved
  const stack = []
  for (const char of input) {
    if (char === '(') stack.push(')')
    else if (char === '{') stack.push('}')
    else if (char === '[') stack.push(']')
    else if (stack.pop() !== char) return false
  }
  return stack.length === 0
}

// Problem 2
const groupAnagrams = () => {}

// Problem 3
const deepCloneObject = (nestedObject) => {
  // Easiest Solution - Preferred Solution
  // return structuredClone(nestedObject)

  // Solution - Not applicable when object has:
  // functions, undefined, Symbol, BigInt, Map, Set, circular references, etc.
  // Dates become strings after serialization.
  return JSON.parse(JSON.stringify(nestedObject))
}

// Problem 4
const debounce = (cb, wait) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      cb(...args)
    }, wait)
  }
}

// Problem 5
const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = []
    let completedPromises = 0

    if (promises.length === 0) {
      resolve(results)
      return
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((result) => {
          results[i] = result

          completedPromises++

          if (completedPromises === promises.length) {
            resolve(results)
          }
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}
