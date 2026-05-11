console.log('Start') // 1

setTimeout(() => {
  console.log('setTimeout 1') // 6
  Promise.resolve().then(() => {
    console.log('Promise inside setTimeout') // 7
  })
}, 0)

Promise.resolve().then(() => {
  console.log('Promise 1') // 4
  process.nextTick(() => {
    console.log('nextTick inside Promise') // 5
  })
})

process.nextTick(() => {
  console.log('nextTick 1') // 3
})

console.log('End') // 2
