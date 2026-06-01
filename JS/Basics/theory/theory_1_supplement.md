# JavaScript Basics - Supplement Questions

## Variables

### Q1. What is a variable?

**Answer:**  
A variable is a named container used to store data values in memory.

---

### Q2. Why do we use variables?

**Answer:**  
Variables allow us to store, update, and reuse data throughout a program.

---

### Q3. What is the difference between declaring and assigning a variable?

```js
let name // Declaration
name = 'Haroon' // Assignment
```

---

### Q4. Can a variable's value be changed after assignment?

```js
let age = 25
age = 26
```

**Answer:** Yes, when declared with `let` or `var`.

---

## var, let, and const

### Q5. What are the three ways to declare variables in JavaScript?

- var
- let
- const

---

### Q6. Which variable declaration should be preferred in modern JavaScript?

**Answer:** `const`

---

### Q7. When should `let` be used?

**Answer:**
When the variable's value needs to change later.

---

### Q8. Why is `var` generally avoided?

**Answer:**

- Function scoped
- Can be redeclared
- Can cause unexpected bugs

---

### Q9. What happens if you try to reassign a `const` variable?

```js
const PI = 3.14
PI = 3.14159
```

**Answer:** Runtime error.

---

### Q10. Can the contents of a const object be modified?

```js
const user = {
  name: 'John',
}

user.name = 'Jane'
```

**Answer:** Yes.

---

## Scope

### Q11. What is scope?

**Answer:**
Scope defines where a variable can be accessed.

---

### Q12. What is block scope?

```js
if (true) {
  let age = 25
}
```

**Answer:**
The variable exists only within the block `{}`.

---

### Q13. Which keywords are block-scoped?

- let
- const

---

### Q14. Which keyword is function-scoped?

- var

---

## Data Types

### Q15. What are the two categories of data types in JavaScript?

1. Primitive Types
2. Reference Types

---

### Q16. What are primitive data types?

**Answer:**
Simple values stored directly in memory.

---

### Q17. List all primitive data types.

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

### Q18. What is a String?

```js
let name = 'Haroon'
```

**Answer:**
A sequence of characters used to represent text.

---

### Q19. What is a Number?

```js
let age = 25
```

**Answer:**
Represents numeric values.

---

### Q20. What is a Boolean?

```js
let isLoggedIn = true
```

**Answer:**
Represents either `true` or `false`.

---

### Q21. What is Undefined?

```js
let name
```

**Answer:**
A variable declared but not assigned a value.

---

### Q22. What is Null?

```js
let value = null
```

**Answer:**
Represents an intentionally empty value.

---

### Q23. Difference between `null` and `undefined`?

| null                   | undefined              |
| ---------------------- | ---------------------- |
| Intentionally empty    | Not assigned           |
| Assigned by programmer | Assigned by JavaScript |

---

### Q24. What is BigInt?

**Answer:**
A numeric type used for very large integers.

```js
const num = 12345678901234567890n
```

---

### Q25. What is Symbol?

**Answer:**
A unique and immutable identifier.

```js
const id = Symbol('id')
```

---

## Objects and Arrays

### Q26. What is an Object?

```js
const user = {
  name: 'John',
  age: 25,
}
```

**Answer:**
A collection of key-value pairs.

---

### Q27. What is an Array?

```js
const fruits = ['Apple', 'Banana']
```

**Answer:**
An ordered collection of values.

---

### Q28. How do you access the first element of an array?

```js
fruits[0]
```

---

### Q29. How do you access an object property?

```js
user.name
```

or

```js
user['name']
```

---

## Functions

### Q30. What is a function?

**Answer:**
A reusable block of code designed to perform a specific task.

---

### Q31. How do you define a function?

```js
function greet() {
  console.log('Hello')
}
```

---

### Q32. How do you call a function?

```js
greet()
```

---

## typeof Operator

### Q33. What is the purpose of `typeof`?

**Answer:**
To determine the type of a value.

---

### Q34. What is the output?

```js
typeof 'Hello'
```

**Answer:**

```txt
string
```

---

### Q35. What is the output?

```js
typeof 100
```

**Answer:**

```txt
number
```

---

### Q36. What is the output?

```js
typeof true
```

**Answer:**

```txt
boolean
```

---

### Q37. What is the output?

```js
typeof undefined
```

**Answer:**

```txt
undefined
```

---

### Q38. What is the output?

```js
typeof null
```

**Answer:**

```txt
object
```

(Historical JavaScript bug)

---

## Type Coercion

### Q39. What is type coercion?

**Answer:**
Automatic conversion of one data type to another by JavaScript.

---

### Q40. What is the output?

```js
'5' + 5
```

**Answer:**

```txt
55
```

---

### Q41. What is the output?

```js
'5' - 2
```

**Answer:**

```txt
3
```

---

## Equality

### Q42. Difference between `==` and `===`?

| ==                | ===                     |
| ----------------- | ----------------------- |
| Compares value    | Compares value and type |
| Performs coercion | No coercion             |

---

### Q43. What is the output?

```js
5 == '5'
```

**Answer:**

```txt
true
```

---

### Q44. What is the output?

```js
5 === '5'
```

**Answer:**

```txt
false
```

---

## Practical Questions

### Q45. Predict the output

```js
let age = 20

if (age >= 18) {
  console.log('Adult')
}
```

**Answer:**

```txt
Adult
```

---

### Q46. Predict the output

```js
const user = {
  name: 'John',
}

user.name = 'Jane'

console.log(user.name)
```

**Answer:**

```txt
Jane
```

---

### Q47. Predict the output

```js
let value

console.log(value)
```

**Answer:**

```txt
undefined
```

---

### Q48. Predict the output

```js
console.log(typeof [])
```

**Answer:**

```txt
object
```

---

### Q49. Predict the output

```js
console.log(typeof {})
```

**Answer:**

```txt
object
```

---

### Q50. What is the modern JavaScript recommendation?

**Answer:**

1. Use `const` by default.
2. Use `let` when values need to change.
3. Avoid `var`.
4. Use `===` instead of `==`.
