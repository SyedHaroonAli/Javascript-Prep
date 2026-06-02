# JavaScript Operators

Operators are special symbols used to perform operations on values (operands).

```js
const result = 10 + 5
```

Here:

- `+` → Operator
- `10` and `5` → Operands

---

# 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Description         | Example  |
| -------- | ------------------- | -------- |
| `+`      | Addition            | `5 + 2`  |
| `-`      | Subtraction         | `5 - 2`  |
| `*`      | Multiplication      | `5 * 2`  |
| `/`      | Division            | `10 / 2` |
| `%`      | Modulus (Remainder) | `10 % 3` |
| `**`     | Exponentiation      | `2 ** 3` |

Example:

```js
console.log(10 + 5) // 15
console.log(10 % 3) // 1
console.log(2 ** 4) // 16
```

---

# 2. Assignment Operators

Used to assign values to variables.

| Operator | Example  | Equivalent  |
| -------- | -------- | ----------- |
| `=`      | `x = 5`  | Assign      |
| `+=`     | `x += 2` | `x = x + 2` |
| `-=`     | `x -= 2` | `x = x - 2` |
| `*=`     | `x *= 2` | `x = x * 2` |
| `/=`     | `x /= 2` | `x = x / 2` |
| `%=`     | `x %= 2` | `x = x % 2` |

Example:

```js
let x = 10

x += 5

console.log(x) // 15
```

---

# 3. Comparison Operators

Used to compare values.

Result is always `true` or `false`.

| Operator | Description           |
| -------- | --------------------- |
| `==`     | Loose Equality        |
| `===`    | Strict Equality       |
| `!=`     | Loose Not Equal       |
| `!==`    | Strict Not Equal      |
| `>`      | Greater Than          |
| `<`      | Less Than             |
| `>=`     | Greater Than or Equal |
| `<=`     | Less Than or Equal    |

Example:

```js
console.log(10 > 5) // true
console.log(5 === '5') // false
console.log(5 == '5') // true
```

---

# Loose vs Strict Equality

## Loose Equality (`==`)

Performs type conversion.

```js
console.log(5 == '5')
```

Output:

```txt
true
```

Because:

```js
Number('5') === 5
```

---

## Strict Equality (`===`)

Checks value and type.

```js
console.log(5 === '5')
```

Output:

```txt
false
```

### Best Practice

Always prefer:

```js
===
!==
```

---

# 4. Logical Operators

Used to combine conditions.

## AND (`&&`)

Returns true only if all conditions are true.

```js
const age = 25
const verified = true

console.log(age >= 18 && verified)
```

Output:

```txt
true
```

---

## OR (`||`)

Returns true if at least one condition is true.

```js
const isAdmin = false
const isManager = true

console.log(isAdmin || isManager)
```

Output:

```txt
true
```

---

## NOT (`!`)

Reverses a boolean value.

```js
console.log(!true)
```

Output:

```txt
false
```

---

# Short Circuit Evaluation

## AND (`&&`)

Stops at first falsy value.

```js
console.log(false && 'Hello')
```

Output:

```txt
false
```

---

## OR (`||`)

Stops at first truthy value.

```js
console.log('Haroon' || 'Guest')
```

Output:

```txt
Haroon
```

---

# 5. Increment and Decrement Operators

## Increment (`++`)

Increases value by 1.

```js
let count = 5

count++

console.log(count)
```

Output:

```txt
6
```

---

## Decrement (`--`)

Decreases value by 1.

```js
let count = 5

count--

console.log(count)
```

Output:

```txt
4
```

---

# Pre vs Post Increment

## Post Increment

```js
let x = 5

console.log(x++)
console.log(x)
```

Output:

```txt
5
6
```

Use value first, increment later.

---

## Pre Increment

```js
let x = 5

console.log(++x)
```

Output:

```txt
6
```

Increment first, then use value.

---

# 6. String Operators

### Concatenation

```js
const firstName = 'Haroon'
const lastName = 'Ali'

console.log(firstName + ' ' + lastName)
```

Output:

```txt
Haroon Ali
```

---

# Template Literals (Preferred)

```js
const name = 'Haroon'

console.log(`Hello ${name}`)
```

Output:

```txt
Hello Haroon
```

---

# 7. Ternary Operator

Short form of `if-else`.

Syntax:

```js
condition ? value1 : value2
```

Example:

```js
const age = 20

const result = age >= 18 ? 'Adult' : 'Minor'

console.log(result)
```

Output:

```txt
Adult
```

---

# 8. Nullish Coalescing Operator (`??`)

Returns right side only if left side is:

- `null`
- `undefined`

```js
const username = null

console.log(username ?? 'Guest')
```

Output:

```txt
Guest
```

---

## Difference Between `||` and `??`

### OR (`||`)

Treats all falsy values as missing.

```js
console.log(0 || 100)
```

Output:

```txt
100
```

---

### Nullish (`??`)

Only treats `null` and `undefined` as missing.

```js
console.log(0 ?? 100)
```

Output:

```txt
0
```

---

# 9. Optional Chaining (`?.`)

Safely access nested properties.

Without optional chaining:

```js
const user = null

console.log(user.profile.name)
```

Output:

```txt
Error
```

---

With optional chaining:

```js
const user = null

console.log(user?.profile?.name)
```

Output:

```txt
undefined
```

---

# 10. Type Operators

## `typeof`

Returns data type.

```js
console.log(typeof 'Haroon')
console.log(typeof 25)
console.log(typeof true)
```

Output:

```txt
string
number
boolean
```

---

## `instanceof`

Checks object type.

```js
const date = new Date()

console.log(date instanceof Date)
```

Output:

```txt
true
```

---

# Operator Precedence

Some operators execute before others.

Example:

```js
console.log(10 + 5 * 2)
```

Output:

```txt
20
```

Because:

```js
5 * 2 = 10
10 + 10 = 20
```

Use parentheses for clarity:

```js
console.log((10 + 5) * 2)
```

Output:

```txt
30
```

---

# Operator Categories Summary

| Category            | Operators                 |     |     |
| ------------------- | ------------------------- | --- | --- |
| Arithmetic          | `+ - * / % **`            |     |     |
| Assignment          | `= += -= *= /= %=`        |     |     |
| Comparison          | `== === != !== > < >= <=` |     |     |
| Logical             | `&&                       |     | !`  |
| Increment/Decrement | `++ --`                   |     |     |
| String              | `+`                       |     |     |
| Ternary             | `? :`                     |     |     |
| Nullish             | `??`                      |     |     |
| Optional Chaining   | `?.`                      |     |     |
| Type                | `typeof`, `instanceof`    |     |     |

### Rule of Thumb

- Use `===` instead of `==`
- Use `??` instead of `||` for default values
- Use template literals instead of string concatenation
- Use optional chaining (`?.`) when accessing nested objects
- Use parentheses when operator precedence is unclear
