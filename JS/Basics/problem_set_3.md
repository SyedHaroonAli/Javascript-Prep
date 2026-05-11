# JavaScript Problem Set 3 — Medium Level

## Problem 1 — Valid Parentheses

Write a function that checks whether a string containing brackets is valid.

Valid pairs:

- `()`
- `{}`
- `[]`

Example:

```js id="m7q2vx"
isValid('()[]{}')
```

Output:

```js id="x5p9wn"
true
```

Example:

```js id="k2v7qd"
isValid('(]')
```

Output:

```js id="t7q3vn"
false
```

---

## Problem 2 — Group Anagrams

Write a function that groups anagrams together.

Example:

```js id="j8v4qm"
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
```

Output:

```js id="f9p4wn"
;[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
```

---

## Problem 3 — Deep Clone an Object

Write a function that deeply clones a nested object or array without sharing references.

Example:

```js id="y2m8qk"
const obj = {
  name: 'Haroon',
  address: {
    city: 'Hyderabad',
  },
}
```

Changes to the cloned object should not affect the original object.

---

## Problem 4 — Implement Debounce

Write a `debounce` function.

Behavior:

- Function executes only after a delay
- Repeated calls reset the timer

Example:

```js id="c5v7pd"
const debounced = debounce(() => {
  console.log('Hello')
}, 1000)
```

---

## Problem 5 — Implement Promise.all

Create a simplified version of:

```js id="n4m8pk"
Promise.all()
```

Requirements:

- Accept array of promises
- Resolve when all succeed
- Reject immediately if any fail
- Preserve result order
