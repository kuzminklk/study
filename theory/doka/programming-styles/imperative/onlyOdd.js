
function onlyOdd(array) {
  const result = []

  for (const element of array) {
    if (element % 2 !== 0) {
      result.push(element)
    }
  }

  return result
}
