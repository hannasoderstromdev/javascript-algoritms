import { swap, pivot, newGap } from "./sorterHelpers";
import { shellSort_bound, insertionSort } from "./insertionSorts";

/*
 * Bubble Sort
 * Swapping, from smallest to biggest
 *
 * In-place
 *
 * Time Complexity Average: O(n^2)
 *   Best: Ω(n)
 *   Average Θ(n^2)
 *   Worst: O(n^2)
 *
 * Space complexity: O(1)
 *
 * + Simple, good for small data sets
 * - Not very efficient
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.525ms
 *   1000 items 3.627ms
 *   10000 items 134.927ms
 *   100000 items 16.538 seconds (!)
 *   1000000 items 30min 31.036 seconds (!)
 */

export function bubbleSort(arr: number[]): number[] {
  let arrayIsSorted = false;

  for (let i = arr.length; i > 0; i--) {
    arrayIsSorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap({ array: arr, index1: j, index2: j + 1 });
        arrayIsSorted = false;
      }
    }
    if (arrayIsSorted) break;
  }
  return arr;
}
// bubbleSort([37, 45, 29, 8, 12, 88, -3])
// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])

/*
 * Comb Sort
 * Basically bubble sort, but heaps faster
 * https://en.wikipedia.org/wiki/Comb_sort
 *
 * The Comb Sort is a variant of the Bubble Sort. Like the
 * Shell sort, the Comb Sort increases the gap used in
 * comparisons and exchanges. Some implementations use the
 * insertion sort once the gap is less than a certain amount.
 *
 * The basic idea is to eliminate turtles, or small values
 * near the end of the list, since in a bubble sort these
 * slow the sorting down tremendously. Rabbits, large values
 * around the beginning of the list, do not pose a problem
 * in bubble sort.
 *
 * In bubble sort, when any two elements are compared,
 * they always have a gap of 1. The basic idea of comb sort
 * is that the gap can be much more than 1.
 *
 * Time Complexity:
 *   Best: Θ(n log n)
 *   Average: Ω(n^2/2^p)
 *   Worst: O(n^2)
 *
 * Space Complexity: O(1)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.228ms
 *   1000 items 2.727ms
 *   10000 items 6.771ms
 *   100000 items 34.658ms
 *   1000000 items 289.745ms
 */
export function combSort(arr: number[]): number[] {
  let gap = arr.length;

  while (true) {
    gap = newGap(gap);
    let swapped = false;

    for (let i = 0, l = arr.length; i < l; i++) {
      let j = i + gap;
      if (arr[i] < arr[j]) {
        swap({ array: arr, index1: i, index2: j });
        swapped = true;
      }
    }

    if (gap == 1 && !swapped) break;
  }

  return arr;
}

/*
 * Quick Sort
 * Recursive
 * In-place
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.184ms
 *   1000 items 0.687ms
 *   10000 items 6.075ms
 *   100000 items 18.792ms
 *   1000000 items 122.925ms
 */
export function quicksort_inPlace(arr: number[], start: number, end: number) {
  if (start < end - 1) {
    // Start in the middle
    let pivotIndex = Math.round((start + end) / 2);

    pivotIndex = quickSort_inPlace_partition(arr, start, end, pivotIndex);

    quicksort_inPlace(arr, start, pivotIndex - 1);
    quicksort_inPlace(arr, pivotIndex + 1, end);
  }

  return arr;
}

function quickSort_inPlace_partition(
  arr: number[],
  start: number,
  end: number,
  pivotIndex: number
) {
  let i = start;
  let j = end;
  const pivot = arr[pivotIndex];

  while (true) {
    while (arr[i] < pivot) {
      i++;
    }
    j--;
    while (pivot < arr[j]) {
      j--;
    }
    if (!(i < j)) {
      return i;
    }
    swap({ array: arr, index1: i, index2: j });
    i++;
  }
}

/* 
  Quick Sort with Pivot
  Recursive
  Time Complexity Average: O(n log n)
*/
export function quickSort_recursive(
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] {
  if (left < right) {
    let pivotIndex = pivot({ array: arr, start: left, end: right });
    quickSort_recursive(arr, left, pivotIndex - 1);
    quickSort_recursive(arr, pivotIndex + 1, right);
  }
  return arr;
}

/*
 * Faster Quicksort
 *
 * Using a stack to eliminate recursion,
 * Sorting in-place to reduce memory usage,
 * and using insertion sort for small partition sizes
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.186ms
 *   1000 items 1.017ms
 *   10000 items 1.759ms
 *   100000 items 13.298ms
 *   1000000 items 105.805ms
 */

export function quickSort_stack(arr: number[]): number[] {
  const stack = [];
  let entry = [
    0,
    arr.length,
    2 * Math.floor(Math.log(arr.length) / Math.log(2)),
  ];

  stack.push(entry);

  while (stack.length > 0) {
    entry = stack.pop() || [0];
    const start = entry[0];
    const end = entry[1];
    let depth = entry[2];
    if (depth == 0) {
      arr = shellSort_bound(arr, start, end);
      continue;
    }
    depth--;

    const pivot = Math.round((start + end) / 2);
    const pivotNewIndex = quickSort_inPlace_partition(arr, start, end, pivot);

    if (end - pivotNewIndex > 16) {
      entry = [pivotNewIndex, end, depth];
      stack.push(entry);
    }

    if (pivotNewIndex - start > 16) {
      entry = [start, pivotNewIndex, depth];
      stack.push(entry);
    }
  }
  arr = insertionSort(arr);

  return arr;
}

//insertionSort([2, 1, 9, 76, 4])

/*
 * Naive Quicksort (memory hog)
 * Recursive
 * In-place
 *
 * Time Complexity:
 *   Best: Ω(n log(n))
 *   Average Θ(n log(n))
 *   Worst: O(n^2)
 *
 * Space complexity: O(log(n))
 *
 * Comparison (will vary, use for relative comparison only)
 *  100 items 0.217ms
 *  1000 items 3.426ms
 *  10000 items 13.68ms
 *  100000 items 86.803ms
 *  1000000 items 755.482ms
 */
export function quickSort_naive(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  let less: number[] = [];
  let greater: number[] = [];
  const pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (typeof pivot !== "undefined" && arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  less = quickSort_naive(less);
  greater = quickSort_naive(greater);

  return typeof pivot !== "undefined" ? less.concat(pivot, greater) : [];
}

//console.log(quickSort([100, -3, 4, 6, 9, 1, 2, 5, 3]))

export default {
  bubbleSort,
  combSort,
  quicksort_inPlace,
  quickSort_recursive,
  quickSort_stack,
  quickSort_naive,
};
