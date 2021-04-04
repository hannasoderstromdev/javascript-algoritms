/*
 * Insertion sort
 * - Complex
 * + Good for nearly sorted arrays or where new data is continuously added
 *
 * Time Complexity:
 *   Best: Ω(n)
 *   Average Θ(n^2)
 *   Worst: O(n^2)
 *
 * Space complexity: O(1)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.209ms
 *   1000 items 2.91ms
 *   10000 items 39.276ms
 *   100000 items 3.137 seconds (!)
 *   1000000 items 5 min 49.567 seconds (!)
 */
export function insertionSort(arr: number[]): number[] {
  for (let i = 1, l = arr.length; i < l; i++) {
    let tmp = arr[i];

    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] <= tmp) break;
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = tmp;
  }
  return arr;
}

/*
 * Shell Sort
 * In-place
 *
 * Shell sort is an optimized version of Insertion sort,
 * that basically allows the exchange of items that are far
 * away from another.
 *
 * Time Complexity:
 *   Best: Ω(n log(n))
 *   Average Θ(n(log(n))^2)
 *   Worst: O(n(log(n))^2)
 *
 * Space complexity: O(1)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.155ms
 *   1000 items 3.176ms
 *   10000 items 6.098ms
 *   100000 items 31.106ms
 *   1000000 items 256.023ms
 */
export function shellSort(arr: number[]): number[] {
  let gap = Math.round(arr.length / 2);
  let gapIndex: number;

  while (gap > 0) {
    for (gapIndex = gap; gapIndex < arr.length; gapIndex++) {
      let tmp = arr[gapIndex];
      let j = gapIndex;

      while (j >= gap && arr[j - gap] > tmp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = tmp;
    }
    gap = Math.round(gap / 2.2);
  }

  return arr;
}

/**
 * Shell Sort - Bound
 * Same as Shell Sort, but allows for setting a boundary which
 * helps performance in very long arrays, if you know which part
 * of it that needs sorting.
 */

export function shellSort_bound(
  arr: number[],
  start: number,
  end: number
): number[] {
  let gap = Math.round((start + end) / 2);
  let gapIndex: number;

  while (gap >= start) {
    for (gapIndex = gap; gapIndex < end; gapIndex++) {
      let tmp = arr[gapIndex];
      let j = gapIndex;

      while (j >= gap && arr[j - gap] > tmp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = tmp;
    }
    gap = Math.round(gap / 2.2);
  }

  return arr;
}

export default {
  insertionSort,
  shellSort,
  shellSort_bound,
};
