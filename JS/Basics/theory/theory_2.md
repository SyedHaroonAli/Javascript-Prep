# Conditional Statements in JavaScript

Conditional statements allow a program to make decisions based on conditions.

---

# `if` Statement

Executes a block of code only if the condition is `true`.

```js
const age = 20

if (age >= 18) {
  console.log('Eligible to vote')
}
```

Output:

```txt
Eligible to vote
```

---

# `if...else` Statement

Executes one block if the condition is true, another if false.

```js
const age = 16

if (age >= 18) {
  console.log('Eligible to vote')
} else {
  console.log('Not eligible to vote')
}
```

Output:

```txt
Not eligible to vote
```

---

# `if...else if...else`

Used when there are multiple conditions.

```js
const marks = 85

if (marks >= 90) {
  console.log('Grade A+')
} else if (marks >= 75) {
  console.log('Grade A')
} else if (marks >= 60) {
  console.log('Grade B')
} else {
  console.log('Grade C')
}
```

Output:

```txt
Grade A
```

### Flow

```txt
Condition 1?
   ↓
True → Execute Block 1
   ↓
False
   ↓
Condition 2?
   ↓
True → Execute Block 2
   ↓
False
   ↓
Else Block
```

Only the **first matching condition** executes.

---

# Nested `if`

An `if` statement inside another `if`.

```js
const age = 25
const hasLicense = true

if (age >= 18) {
  if (hasLicense) {
    console.log('Can drive')
  }
}
```

Output:

```txt
Can drive
```

---

# Truthy and Falsy Values

JavaScript automatically converts values to boolean when evaluating conditions.

## Falsy Values

```js
false
0 - 0
0n
;('')
;('')
null
undefined
NaN
```

Example:

```js
const username = ''

if (username) {
  console.log('User exists')
} else {
  console.log('No username')
}
```

Output:

```txt
No username
```

---

## Truthy Values

Everything else is truthy.

```js
'hello'
[]
{}
1
-1
true
```

Example:

```js
if ([]) {
  console.log('Truthy')
}
```

Output:

```txt
Truthy
```

---

# Comparison Operators

| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Loose equality        |
| `===`    | Strict equality       |
| `!=`     | Loose not equal       |
| `!==`    | Strict not equal      |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

Example:

```js
console.log(5 === '5')
```

Output:

```txt
false
```

---

# Logical Operators

## AND (`&&`)

All conditions must be true.

```js
const age = 25
const citizen = true

if (age >= 18 && citizen) {
  console.log('Eligible')
}
```

---

## OR (`||`)

At least one condition must be true.

```js
const isAdmin = false
const isManager = true

if (isAdmin || isManager) {
  console.log('Access Granted')
}
```

---

## NOT (`!`)

Reverses boolean value.

```js
const isLoggedIn = false

if (!isLoggedIn) {
  console.log('Please login')
}
```

---

# Switch Statement

Used when comparing one value against multiple possible values.

### Syntax

```js
switch (expression) {
  case value1:
    // code
    break

  case value2:
    // code
    break

  default:
  // code
}
```

---

## Example

```js
const day = 3

switch (day) {
  case 1:
    console.log('Monday')
    break

  case 2:
    console.log('Tuesday')
    break

  case 3:
    console.log('Wednesday')
    break

  default:
    console.log('Invalid Day')
}
```

Output:

```txt
Wednesday
```

---

# Why `break` is Important

Without `break`, execution continues to the next case.

```js
const day = 1

switch (day) {
  case 1:
    console.log('Monday')

  case 2:
    console.log('Tuesday')

  default:
    console.log('Other')
}
```

Output:

```txt
Monday
Tuesday
Other
```

This behavior is called **Fall Through**.

---

# Multiple Cases

```js
const role = 'editor'

switch (role) {
  case 'admin':
  case 'editor':
    console.log('Can Edit Content')
    break

  case 'viewer':
    console.log('Read Only')
    break
}
```

Output:

```txt
Can Edit Content
```

---

# Switch vs If-Else

### Using If-Else

```js
if (color === 'red') {
  console.log('Stop')
} else if (color === 'yellow') {
  console.log('Wait')
} else if (color === 'green') {
  console.log('Go')
}
```

### Using Switch

```js
switch (color) {
  case 'red':
    console.log('Stop')
    break

  case 'yellow':
    console.log('Wait')
    break

  case 'green':
    console.log('Go')
    break
}
```

---

# Ternary Operator

Short form of `if...else`.

### Syntax

```js
condition ? valueIfTrue : valueIfFalse
```

Example:

```js
const age = 20

const message = age >= 18 ? 'Adult' : 'Minor'

console.log(message)
```

Output:

```txt
Adult
```

### Rule of Thumb

- **Single condition** → `if`
- **Two outcomes** → `if...else`
- **Multiple conditions/ranges** → `if...else if`
- **One variable, many exact values** → `switch`
- **Simple true/false assignment** → ternary (`? :`)
