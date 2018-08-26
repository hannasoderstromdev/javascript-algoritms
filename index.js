/*
  Naive String Search
*/
function naiveSearch(string, find) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < find.length; j++) {
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

// 1. EASIER SORTING ALGORITHMS

/* 
  Bubble Sort 
    Swapping, from smallest to biggest
  + Simple, good for small data sets
  - Not very efficient 
    Time Complexity Average: O(n^2)
*/
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
// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])

/* 
  Selection Sort 
    Swapping, from biggest to smallest
  + Simple, good for small data sets
  - Not good for nearly sorted lists
    Time Complexity Average: O(n^2)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      console.log('before', arr)
      const temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
      console.log('after', arr)
    }
  }
  return arr
}
//selectionSort([34, 22, 10, 19, 17])

/* 
  Insertion Sort
  - Complex
  + Good for nearly sorted arrays or where new data is continuously added
    Time Complexity Average: O(n^2)
*/
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    const current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
      console.log(arr[j])
    }
    arr[j + 1] = current
    console.log(arr)
  }
  return arr
}
//insertionSort([2, 1, 9, 76, 4])

// 2. INTERMEDIATE SORTING ALGORITHMS

// Helper function Merge
function merge(arr1, arr2) {
  console.log('merge!')
  const results = []
  let i = 0
  let j = 0

  // Neither array is sorted
  while (arr1.length > i && arr2.length > j) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
    console.log(results, 'sorting both...')
  }

  // Second array is sorted, continue with first
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
    console.log(results, 'sorting first...')
  }

  // First array is sorted, continue with second
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
    console.log(results, 'sorting second...')
  }
  console.log(results, 'finished!')
  return results
}
// merge([1, 10, 50], [2, 14, 99, 100])

/* 
  Merge Sort
  recursive function
  Time Complexity Average: O(n log n)
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}
// mergeSort([10, 24, 76, 73])

/* 
  Quick Sort with Pivot
  recursive function
  Time Complexity Average: O(n log n)
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

//console.log(quickSort([100, -3, 4, 6, 9, 1, 2, 5, 3]))

// 3. EXPERT SORTING ALGORITHMS

/*
  Radix Sort
  (Only works with Integers)
  Time Complexity Average: O(nk), n = length of array, k = number of digits average
*/

// Helper function getDigit
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// Helper function digitCount
function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// Helper function mostDigits (implementing digitCount)
function mostDigits(numArray) {
  let maxDigits = 0
  for (let i = 0; i < numArray.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numArray[i]))
  }
  return maxDigits
}

function radixSort(numArray) {
  let maxDigitCount = mostDigits(numArray)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < numArray.length; i++) {
      let digit = getDigit(numArray[i], k)
      digitBuckets[digit].push(numArray[i])
    }
    numArray = [].concat(...digitBuckets)
    console.log(numArray)
  }
  return numArray
}

radixSort([23, 345, 5467, 12, 2345, 9852])
