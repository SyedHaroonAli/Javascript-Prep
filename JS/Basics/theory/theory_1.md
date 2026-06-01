# JavaScript Basics

## What is JavaScript?

JavaScript is a high-level, interpreted programming language used to add interactivity and logic to web applications. It can run in browsers and on servers using Node.js.

---

# Variables

Variables are containers used to store data.

## Variable Assignment

```js
let name = 'Haroon'
let age = 25

console.log(name)
console.log(age)
```

---

# var, let, and const

JavaScript provides three ways to declare variables.

## var

```js
var city = 'Hyderabad'

city = 'Mumbai' // Allowed
```

### Characteristics

- Function scoped
- Can be reassigned
- Can be redeclared
- Older way of declaring variables
- Generally avoided in modern JavaScript

```js
var name = 'John'
var name = 'Jane' // Valid
```

---

## let

```js
let age = 25

age = 26 // Allowed
```

### Characteristics

- Block scoped
- Can be reassigned
- Cannot be redeclared in the same scope
- Preferred for variables whose values may change

```js
let score = 100
score = 120
```

---

## const

```js
const PI = 3.14159
```

### Characteristics

- Block scoped
- Cannot be reassigned
- Cannot be redeclared
- Preferred by default

```js
const company = 'LemaiCRM'

// company = "Google"; Error
```

### Important Note

For objects and arrays, `const` prevents reassignment of the variable, not modification of its contents.

```js
const user = {
  name: 'John',
}

user.name = 'Jane' // Allowed
```

---

# Scope

Scope determines where a variable can be accessed.

## Function Scope

Variables declared with `var` are accessible throughout the function.

```js
function test() {
  var message = 'Hello'
}

console.log(message) // Error
```

---

## Block Scope

Variables declared with `let` and `const` exist only inside the block.

```js
if (true) {
  let age = 25
}

console.log(age) // Error
```

---

# Data Types

JavaScript has two major categories of data types:

1. Primitive Types
2. Reference Types

---

# Primitive Data Types

Primitive values are immutable and stored directly.

## String

Represents textual data.

```js
let name = 'Haroon'
let city = 'Hyderabad'
```

Examples:

```js
'Hello World'
'JavaScript'
```

---

## Number

Represents numeric values.

```js
let age = 25
let price = 99.99
```

Examples:

```js
100
3.14 - 50
```

JavaScript uses a single `Number` type for integers and decimals.

---

## Boolean

Represents true or false values.

```js
let isLoggedIn = true
let isAdmin = false
```

Used heavily in conditions.

```js
if (isLoggedIn) {
  console.log('Welcome')
}
```

---

## Undefined

A variable that has been declared but not assigned a value.

```js
let name

console.log(name) // undefined
```

---

## Null

Represents an intentional absence of value.

```js
let selectedUser = null
```

Difference:

```js
undefined // value not assigned
null // value intentionally empty
```

---

## BigInt

Used for very large integers.

```js
const largeNumber = 12345678901234567890n
```

---

## Symbol

Represents a unique identifier.

```js
const id = Symbol('userId')
```

Rarely used in beginner-level code.

---

# Reference Data Types

Reference types store references to memory locations.

---

## Object

A collection of key-value pairs.

```js
const user = {
  name: 'Haroon',
  age: 25,
}
```

Accessing values:

```js
console.log(user.name)
console.log(user.age)
```

---

## Array

An ordered collection of values.

```js
const fruits = ['Apple', 'Banana', 'Orange']
```

Accessing values:

```js
console.log(fruits[0])
console.log(fruits[1])
```

---

## Function

Functions are reusable blocks of code.

```js
function greet() {
  console.log('Hello')
}
```

Calling the function:

```js
greet()
```

---

# typeof Operator

Used to determine the type of a value.

```js
typeof 'Hello' // string
typeof 123 // number
typeof true // boolean
typeof undefined // undefined
typeof {} // object
typeof [] // object
typeof null // object (historical JavaScript bug)
```

---

# Type Coercion

JavaScript automatically converts types in some situations.

```js
'5' + 5
```

Output:

```txt
55
```

Because the number is converted to a string.

---

```js
'5' - 2
```

Output:

```txt
3
```

Because the string is converted to a number.

---

# Equality Operators

## Loose Equality (==)

Compares values after type conversion.

```js
5 == '5' // true
```

---

## Strict Equality (===)

Compares both value and type.

```js
5 === '5' // false
```

Recommended:

```js
===
!==
```

---

# Quick Summary

| Keyword | Scope    | Reassign | Redeclare |
| ------- | -------- | -------- | --------- |
| var     | Function | ✅       | ✅        |
| let     | Block    | ✅       | ❌        |
| const   | Block    | ❌       | ❌        |

| Primitive Types |
| --------------- |
| String          |
| Number          |
| Boolean         |
| Undefined       |
| Null            |
| BigInt          |
| Symbol          |

| Reference Types |
| --------------- |
| Object          |
| Array           |
| Function        |

## Modern JavaScript Rule

- Use `const` by default.
- Use `let` when the value needs to change.
- Avoid `var` unless maintaining old codebases.
- Prefer `===` over `==`.
