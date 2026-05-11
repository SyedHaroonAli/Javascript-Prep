console.log('Start') // 1

Promise.resolve().then(() => {
  console.log('Inside Promise') // 3
  setTimeout(() => {
    console.log('Timeout inside Promise') // 5
  }, 0)
})

console.log('End') // 2

setTimeout(() => {
  console.log('Regular Timeout') // 4
}, 0)
