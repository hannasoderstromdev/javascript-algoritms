// Naive String Search
function naiveSearch(string, find) {
  var count = 0
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < find.length; j++) {
      console.log(find[j], string[i + j])
      if (find[j] !== string[i + j]) {
        console.log('BREAK')
        break
      }
      if (j === find.length - 1) {
        console.log('FOUND MATCH')
        count++
      }
    }
  }
  return count
}

//naiveSearch('lorie loled', 'lo')

// Bubble sort with swapping (tries to sort every item)
function bubbleSort(arr) {
  let arrayIsSorted
  for (let i = arr.length; i > 0; i--) {
    arrayIsSorted = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        arrayIsSorted = false
      }
      console.log(arr)
    }
    if (arrayIsSorted) break
  }
  return arr
}

// bubbleSort([37, 45, 29, 8, 12, 88, -3])
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
