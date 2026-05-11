// Deep Copy/Clone - Safe
const originalArray = [1, 2, { a: 3 }, [4, 5]]
const copiedArray = structuredClone(originalArray)

console.log(originalArray, 'Original Array')
console.log(copiedArray, 'Copied Array')
