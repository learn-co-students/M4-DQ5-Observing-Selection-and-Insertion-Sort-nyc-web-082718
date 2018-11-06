function insertionSort(arr) {
  arr.forEach((n, i) => { // for every item in the collection
    moveInPlace(arr, i)
  })
}

function moveInPlace(arr, i) {
  const n = arr[i]
  if (arr[i-1] && arr[i-1] > n) { // check if the previous item is greater than the current item
    arr[i] = arr[i-1] // if greater, the current item is not in place: swap it with the previous item
    arr[i-1] = n
    moveInPlace(arr, i-1) // repeat this process until the item is in the proper place
  }
  // only then move on to the next item in the collection
}
