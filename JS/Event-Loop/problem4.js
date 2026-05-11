console.log('Start') // 1

setImmediate(() => {
  console.log('Immediate') // 6
})

setTimeout(() => {
  console.log('Timeout') // 7
}, 0)

process.nextTick(() => {
  console.log('nextTick') // 3
})

Promise.resolve().then(() => {
  console.log('Promise') // 4
})

queueMicrotask(() => {
  console.log('Microtask') // 5
})

console.log('End') // 2
