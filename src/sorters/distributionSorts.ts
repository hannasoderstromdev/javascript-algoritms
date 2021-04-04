import { findMostDigitsFromNumbers, getDigit } from "./sorterHelpers";

/*
 * Radix Sort
 * Sorts numbers by comparing number of digits
 * Groups by buckets and then concat those buckets
 *
 * Time Complexity Average: O(nk)
 *   n = length of array
 *   k = number of digits average
 *
 *   Best: Ω(nk)
 *   Average Θ(nk)
 *   Worst: O(nk)
 *
 * Space complexity: O(n+k)
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.719ms
 *   1000 items 1.548ms
 *   10000 items 41.672ms
 *   100000 items 97.209ms
 *   1000000 items 957.987ms
 */

export function radixSort(numArray: number[]): number[] {
  const maxDigitCount = findMostDigitsFromNumbers(numArray);
  let result: number[] = [];

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < numArray.length; i++) {
      const currentNumber = numArray[i];
      let digit = getDigit({ num: currentNumber, place: k });
      digitBuckets[digit].push(currentNumber);
    }
    const tempArray: number[] = [];
    result = tempArray.concat(...digitBuckets);
  }
  return result;
}

export default {
  radixSort,
};
