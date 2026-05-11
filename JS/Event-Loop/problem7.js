console.log('A') // 1

Promise.resolve().then(() => {
  console.log('B') // 4
  nested()
})

function nested() {
  process.nextTick(() => {
    console.log('C') // 5
  })

  Promise.resolve().then(() => {
    console.log('D') // 6
  })
}

process.nextTick(() => {
  console.log('E') // 3
})

console.log('F') // 2
