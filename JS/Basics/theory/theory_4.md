# JavaScript Functions

## What is a Function?

A function is a reusable block of code designed to perform a specific task.

```js
function greet() {
  console.log('Hello World')
}

greet()
```

---

# Function Declaration

```js
function add(a, b) {
  return a + b
}

console.log(add(2, 3))
```

### Characteristics

- Hoisted completely
- Can be called before definition

```js
sayHello()

function sayHello() {
  console.log('Hello')
}
```

---

# Function Expression

A function assigned to a variable.

```js
const add = function (a, b) {
  return a + b
}

console.log(add(2, 3))
```

### Characteristics

- Not fully hoisted
- Cannot be called before initialization

```js
add(2, 3) // Error

const add = function (a, b) {
  return a + b
}
```

---

# Arrow Functions

Introduced in ES6.

```js
const add = (a, b) => {
  return a + b
}
```

Short form:

```js
const add = (a, b) => a + b
```

Single parameter:

```js
const square = (num) => num * num
```

No parameters:

```js
const greet = () => 'Hello'
```

### Characteristics

- No own `this`
- No own `arguments`
- Cannot be used as constructors

---

# Anonymous Functions

Functions without a name.

```js
setTimeout(function () {
  console.log('Executed')
}, 1000)
```

---

# Named Function Expressions

```js
const greet = function sayHello() {
  console.log('Hello')
}
```

Useful for debugging stack traces.

---

# Immediately Invoked Function Expression (IIFE)

Executes immediately after creation.

```js
;(function () {
  console.log('I run immediately')
})()
```

Arrow version:

```js
;(() => {
  console.log('I run immediately')
})()
```

### Common Use

Before ES6 modules, used to create private scope.

---

# Higher Order Functions

Functions that:

- Accept functions as arguments
- Return functions

```js
function calculate(a, b, operation) {
  return operation(a, b)
}

function add(x, y) {
  return x + y
}

console.log(calculate(10, 5, add))
```

---

# Callback Functions

Functions passed as arguments.

```js
function fetchData(callback) {
  callback()
}

fetchData(() => {
  console.log('Data received')
})
```

---

# Constructor Functions

Used to create objects before classes.

```js
function User(name) {
  this.name = name
}

const user = new User('Haroon')
```

---

# Generator Functions

Can pause and resume execution.

```js
function* counter() {
  yield 1
  yield 2
  yield 3
}

const gen = counter()

console.log(gen.next())
console.log(gen.next())
```

Output:

```js
{ value: 1, done: false }
{ value: 2, done: false }
```

---

# Async Functions

Return a Promise automatically.

```js
async function getData() {
  return 'Hello'
}

getData().then(console.log)
```

---

# Parameters vs Arguments

### Parameters

Variables defined in function declaration.

```js
function add(a, b) {
  return a + b
}
```

`a` and `b` are parameters.

### Arguments

Values passed during function call.

```js
add(10, 20)
```

`10` and `20` are arguments.

---

# Default Parameters

```js
function greet(name = 'Guest') {
  return `Hello ${name}`
}

console.log(greet())
```

Output:

```js
Hello Guest
```

---

# Rest Parameters

Collect remaining arguments.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3, 4))
```

---

# Scope

## Global Scope

```js
const company = 'LemaiCRM'

function show() {
  console.log(company)
}
```

---

## Function Scope

```js
function test() {
  const age = 25
}

console.log(age) // Error
```

---

## Block Scope

```js
if (true) {
  let name = 'Haroon'
}
```

`let` and `const` are block scoped.

---

# Lexical Scope

Functions can access variables from parent scopes.

```js
function outer() {
  const company = 'LemaiCRM'

  function inner() {
    console.log(company)
  }

  inner()
}

outer()
```

---

# Closures

A closure remembers variables from its outer scope even after the outer function has finished execution.

```js
function counter() {
  let count = 0

  return function () {
    count++
    return count
  }
}

const increment = counter()

console.log(increment())
console.log(increment())
```

Output:

```js
1
2
```

---

# Execution Context

Whenever JavaScript executes code, it creates an **Execution Context**.

## Types

### 1. Global Execution Context (GEC)

Created when program starts.

```js
const name = 'Haroon'

function greet() {}
```

---

### 2. Function Execution Context (FEC)

Created whenever a function is called.

```js
function greet() {
  console.log('Hello')
}

greet()
```

---

# Execution Context Phases

## Phase 1: Memory Creation Phase

JS scans code and allocates memory.

```js
var x = 10

function greet() {}
```

Memory:

```txt
x -> undefined
greet -> function definition
```

---

## Phase 2: Execution Phase

Code executes line by line.

```txt
x -> 10
```

---

# Call Stack

Tracks execution contexts.

```js
function one() {
  two()
}

function two() {
  three()
}

function three() {
  console.log('Done')
}

one()
```

Call Stack:

```txt
Global
one()
two()
three()
```

Then:

```txt
Global
one()
two()
```

Then:

```txt
Global
one()
```

Then:

```txt
Global
```

LIFO (Last In First Out).

---

# Hoisting

JavaScript moves declarations to memory before execution.

```js
console.log(a)

var a = 10
```

Output:

```js
undefined
```

Because:

```js
var a
console.log(a)
a = 10
```

---

# Function Hoisting

```js
greet()

function greet() {
  console.log('Hello')
}
```

Works because function declarations are fully hoisted.

---

# `this` in Functions

Regular Function:

```js
const user = {
  name: 'Haroon',
  greet() {
    console.log(this.name)
  },
}
```

`this` refers to the object calling the function.

---

Arrow Function:

```js
const user = {
  name: 'Haroon',
  greet: () => {
    console.log(this.name)
  },
}
```

Arrow functions inherit `this` from parent scope.

---
