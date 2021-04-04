/*
 * Merge Sort
 * Recursive
 *
 * Time Complexity Average: O(n log n)
 *   Best: Ω(n log(n))
 *   Average Θ(n log(n))
 *   Worst: O(n log(n))
 *
 * Space complexity: O(n)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.282ms
 *   1000 items 2.419ms
 *   10000 items 8.141ms
 *   100000 items 54.454ms
 *   1000000 items 496.339ms
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
// mergeSort([10, 24, 76, 73])

/*
 * Merge sort (actual sorting)
 */
function merge(array1: number[], array2: number[]): number[] {
  const results = [];
  let i = 0;
  let j = 0;

  // Neither array is sorted - sort both
  while (array1.length > i && array2.length > j) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }

  // Second array is sorted, continue with first
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }

  // First array is sorted, continue with second
  while (j < array2.length) {
    results.push(array2[j]);
    j++;
  }

  return results;
}
// merge([1, 10, 50], [2, 14, 99, 100])

/*
 * Merge Sort #2
 * Recursive
 * Not in-place (uses more memory)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 1.136ms
 *   1000 items 1.083ms
 *   10000 items 11.306ms
 *   100000 items 30.005ms
 *   1000000 items 452.521ms
 */
export function mergeSort2(arr: number[]): number[] {
  const half = Math.floor(arr.length / 2);
  const a = mergeSort2(arr.slice(0, half));
  const b = mergeSort2(arr.slice(half, arr.length));
  let aCount = 0;
  let bCount = 0;
  let returnArr = [];

  while (true) {
    if (a[aCount] <= b[bCount]) {
      returnArr.push(a[aCount]);
      aCount++;
      if (aCount === a.length) {
        returnArr = returnArr.concat(b.slice(bCount, b.length));
        break;
      }
    } else {
      returnArr.push(b[bCount]);
      bCount++;
      if (bCount === b.length) {
        returnArr = returnArr.concat(a.slice(aCount, a.length));
        break;
      }
    }
  }
  return returnArr;
}

export default {
  mergeSort,
  mergeSort2,
};
