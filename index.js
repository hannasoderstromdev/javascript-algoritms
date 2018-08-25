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

/* 
  Merge part of mergeSort
*/
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

mergeSort([10, 24, 76, 73])
