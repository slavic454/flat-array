const assert = require('assert')

const convertToFlatArray = (arr) => {
  let flatArray = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = [...flatArray, ...convertToFlatArray(arr[i])]
    } else {
      flatArray = [...flatArray, arr[i]]
    }
  }

  return flatArray
}

assert.deepEqual(convertToFlatArray([[1, [2, [3]], 4]]), [1, 2, 3, 4])
assert.deepEqual(convertToFlatArray([1, 2, 3, 4]), [1, 2, 3, 4])
assert.deepEqual(
  convertToFlatArray([
    1,
    [2, [3, [4, [5, [6, [7, [8], [[[[[[[[[[[[9]]]]]]]]]]]]]]]]]],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
)