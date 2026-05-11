console.log('Start') // 1

new Promise((resolve) => {
  console.log('new Promise') // 2
  resolve()
}).then(() => console.log('new Promise then')) // 5

Promise.resolve().then(() => console.log('Promise.resolve then')) // 6
;(async () => {
  console.log('async function') //3
  await null
  console.log('async after await') // 7
})()

setTimeout(() => console.log('setTimeout'), 0) // 8

console.log('End') // 4
