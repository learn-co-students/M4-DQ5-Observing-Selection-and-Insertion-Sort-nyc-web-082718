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

//
// function selectionSort(arr) {
//   // for every item in the collection
//   // find the smallest item in the unsorted portion of the array and swap it with the current item
//
//   arr.forEach((n, i) => {
//     const rest = arr.slice(i)
//     console.log(rest);
//     const smallest = findSmallest(rest)
//     console.log(smallest);
//     const indexOfSmallest = arr.indexOf(smallest)
//     arr[i] = smallest
//     arr[indexOfSmallest] = n
//   })
// }
//
// function findSmallest(rest) {
//   let smallest = rest[0]
//   rest.forEach((n, i) => {
//     if (n < smallest) {
//       smallest = n
//     }
//   })
//   return smallest
// }
