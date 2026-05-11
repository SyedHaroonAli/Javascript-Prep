console.log('Before everything')

const promise = new Promise((resolve) => {
  console.log('Promise started')
  setImmediate(() => {
    console.log('Inside setImmediate from promise')
  })
  resolve('Promise resolved')
})

promise.then((result) => {
  console.log('Promise result:', result)
  setImmediate(() => {
    console.log('Inside setImmediate from promise then')
  })
})

setTimeout(() => {
  console.log('Inside setTimeout')
}, 0)

console.log('After everything')
