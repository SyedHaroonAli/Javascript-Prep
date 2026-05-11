# JavaScript Basics

## Things to Remember About JavaScript

1. **Single-threaded**
   JavaScript executes one task at a time using a single call stack.

2. **Synchronous by Default**
   Code executes line by line unless asynchronous operations are used.

3. **Interpreted / JIT Compiled**
   JavaScript engines like V8 compile and optimize code during runtime using Just-In-Time (JIT) compilation.

4. **Dynamically Typed**
   Variable types are determined at runtime.

   ```js
   let x = 10
   x = 'hello'
   ```

5. **Prototype-based Language**
   JavaScript uses prototypes for inheritance instead of classical inheritance.

6. **Event-driven**
   Actions like clicks, API responses, and timers trigger events.

7. **Runs Everywhere**
   JavaScript runs in:
   - Browsers
   - Servers (Node.js)
   - Mobile apps
   - Desktop apps
   - IoT devices

8. **Case-sensitive**

   ```js
   let name = 'Haroon'
   let Name = 'Ali'
   ```

---

# Variables

## var

Function scoped and can be redeclared.

```js
var age = 20
```

## let

Block scoped and mutable.

```js
let count = 1
count = 2
```

## const

Block scoped and cannot be reassigned.

```js
const pi = 3.14
```

---

# Data Types

## Primitive Types

- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol

## Non-Primitive Types

- Object
- Array
- Function
- Map
- Set

Example:

```js
const user = {
  name: 'Haroon',
  age: 24,
}
```

---

# Operators

## Arithmetic

```js
+ - * / %
```

## Comparison

```js
== === != !== > < >= <=
```

## Logical

```js
&& || !
```

---

# Conditions

## if else

```js
if (age >= 18) {
  console.log('Adult')
} else {
  console.log('Minor')
}
```

## switch

```js
switch (role) {
  case 'admin':
    console.log('Admin')
    break

  default:
    console.log('User')
}
```

---

# Loops

## for loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

## while loop

```js
while (x < 5) {
  x++
}
```

## for...of

```js
for (const item of arr) {
  console.log(item)
}
```

---

# Functions

## Normal Function

```js
function add(a, b) {
  return a + b
}
```

## Arrow Function

```js
const add = (a, b) => a + b
```

## Higher Order Functions

Functions can:

- accept functions as arguments
- return functions

Example:

```js
const greet = (name) => () => {
  console.log(`Hello ${name}`)
}
```

---

# Arrays

```js
const fruits = ['apple', 'banana']
```

Common methods:

```js
push()
pop()
map()
filter()
find()
reduce()
flat()
includes()
```

---

# Objects

```js
const user = {
  name: 'Haroon',
  age: 24,
}
```

Access values:

```js
user.name
user['age']
```

---

# Map & Set

## Set

Stores unique values.

```js
const unique = new Set([1, 2, 2, 3])
```

Useful for:

- removing duplicates
- fast lookups

---

## Map

Stores key-value pairs.

```js
const map = new Map()

map.set('a', 1)
map.get('a')
```

Useful for:

- frequency counting
- caching
- complex key handling

---

# String Manipulation

## Reverse String

```js
const reversed = str.split('').reverse().join('')
```

---

## Palindrome Check

```js
const isPalindrome = (str) => {
  let i = 0
  let j = str.length - 1

  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }

    i++
    j--
  }

  return true
}
```

---

# Arrays & Problem Solving

## Remove Duplicates

```js
const unique = [...new Set(arr)]
```

---

## Flatten Array

### One Level

```js
arr.flat()
```

### Infinite Levels

```js
arr.flat(Infinity)
```

### Iterative Flattening

```js
const flattenArray = (arr) => {
  const stack = [...arr]
  const result = []

  while (stack.length) {
    const current = stack.pop()

    if (Array.isArray(current)) {
      stack.push(...current)
    } else {
      result.push(current)
    }
  }

  return result.reverse()
}
```

---

# Frequency Counter Pattern

```js
const charFrequency = (inputString) => {
  const charMap = {}

  for (const char of inputString) {
    charMap[char] = (charMap[char] || 0) + 1
  }

  return charMap
}
```

---

# Two Pointer Technique

Used for:

- palindrome checks
- sorted arrays
- pair problems

Example:

```js
let i = 0
let j = arr.length - 1
```

---

# Stack Data Structure

Stacks follow:

```txt
LIFO → Last In First Out
```

Common methods:

```js
push()
pop()
```

Used in:

- DFS traversal
- flattening arrays
- valid parentheses
- browser history

---

# Asynchronous JavaScript

## setTimeout

```js
setTimeout(() => {
  console.log('Hello')
}, 1000)
```

## Promise

```js
fetchData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
```

## async/await

```js
async function getData() {
  const data = await fetchData()
  console.log(data)
}
```

---

# DOM Manipulation

```js
document.getElementById('title')
document.querySelector('.box')
```

Change content:

```js
element.innerText = 'Hello'
```

Add event:

```js
button.addEventListener('click', () => {
  console.log('Clicked')
})
```

---

# Important Concepts

## Hoisting

Variables and functions are moved to the top of their scope during execution.

---

## Closures

Functions can remember variables from their outer scope.

---

## Scope

- Global Scope
- Function Scope
- Block Scope

---

## Event Loop

Handles asynchronous callbacks in JavaScript.

---

## Time Complexity

Measures execution growth with input size.

Common complexities:

```txt
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
```

---

## Space Complexity

Measures additional memory usage.

Example:

- Two pointer palindrome → `O(1)`
- Flatten array → `O(n)`

---

# Modern JavaScript Features

## Destructuring

```js
const { name } = user
```

## Spread Operator

```js
const arr2 = [...arr1]
```

## Optional Chaining

```js
user?.address?.city
```

## Template Literals

```js
const msg = `Hello ${name}`
```

---

# Common Runtime Environments

- Browser
- Node.js
- Deno
- Bun

---

# Popular JavaScript Libraries & Frameworks

## Frontend

- React
- Vue
- Angular
- Svelte

## Backend

- Express.js
- NestJS
- Fastify

---

# Best Practices

1. Prefer `const` over `let`
2. Avoid `var`
3. Use strict equality (`===`)
4. Write small reusable functions
5. Handle errors properly
6. Keep code modular
7. Use meaningful variable names
8. Learn async programming deeply
9. Analyze time and space complexity
10. Prefer readable code over clever code
11. Avoid unnecessary mutations
12. Learn problem-solving patterns deeply

> ## Final Note
>
> This document is only a primer/introduction to JavaScript and problem solving.
> Do not memorize snippets blindly — focus on understanding:
>
> - how JavaScript works internally
> - execution flow
> - closures
> - async behavior
> - memory management
> - data structures
> - problem solving patterns
> - time and space complexity
>
> For deeper understanding, always refer to:
>
> - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript?utm_source=chatgpt.com)
> - [JavaScript Mastery](https://javascript.info)
>
> The goal is not just to write code, but to understand _why_ the code works.
