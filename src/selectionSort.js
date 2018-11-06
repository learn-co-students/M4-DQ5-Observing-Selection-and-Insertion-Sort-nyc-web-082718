function selectionSort(arr) {
  // for every item in the collection
  // find the smallest item in the unsorted portion of the array and swap it with the current item

  arr.forEach((n, i) => {
    const rest = arr.slice(i)
    const smallest = findSmallest(rest)
    const indexOfSmallest = arr.indexOf(smallest)
    arr[i] = smallest
    arr[indexOfSmallest] = n
  })
}

function findSmallest(rest) {
  let smallest = rest[0]
  rest.forEach((n, i) => {
    if (n < smallest) {
      smallest = n
    }
  })
  return smallest
}
