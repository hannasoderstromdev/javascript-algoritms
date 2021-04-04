import { swap, heapify, shiftDown, heapify_recursive } from "./sorterHelpers";

/*
 * Selection Sort
 * Swapping, from biggest to smallest
 *
 * + Simple, good for small data sets
 * - Not good for nearly sorted lists
 *
 * Time Complexity Average: O(n^2)
 */
export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap({ array: arr, index1: i, index2: lowest });
    }
  }
  return arr;
}
//selectionSort([34, 22, 10, 19, 17])

/*
 * Heap sort
 * In-place
 * None-stable
 * Max-heap
 *
 * Time Complexity:
 *   Best: Ω(n log(n))
 *   Average Θ(n log(n))
 *   Worst: O(n log(n))
 *
 * Space complexity: O(1)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.256ms
 *   1000 items 2.465ms
 *   10000 items 6.639ms
 *   100000 items 22.916ms
 *   1000000 items 180.906ms
 */
export function heapSort(arr: number[]): number[] {
  heapify(arr);

  for (var end = arr.length - 1; end > 0; end--) {
    swap({ array: arr, index1: end, index2: 0 });
    shiftDown(arr, 0, end - 1);
  }

  return arr;
}

/*
 * Heap sort - recursive
 *
 * Same as above, but uses recursion to create the max-heap.
 * As it is done in-place (not creating a new instance of the
 * array) it doesn't affect memory usage negatively.
 */

export function heapSort_recursive(arr: number[]): number[] {
  const length = arr.length;
  let lastParentNode = Math.floor(length / 2 - 1);
  let lastChild = length - 1;

  while (lastParentNode >= 0) {
    heapify_recursive(arr, length, lastParentNode);
    lastParentNode--;
  }

  while (lastChild >= 0) {
    // Swap
    [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
    heapify_recursive(arr, lastChild, 0);
    lastChild--;
  }

  return arr;
}

export default {
  selectionSort,
  heapSort,
  heapSort_recursive,
};
