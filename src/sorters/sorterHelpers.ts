/**
 * Swap
 * Swaps places of two items an in array
 */
export interface ISwap {
  array: number[];
  index1: number;
  index2: number;
}

export function swap({ array, index1, index2 }: ISwap): void {
  const tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}

/*
 * Pivot
 *
 * Sorts values in array left of pivot point
 * returns number of items with values smaller
 * than the value at the pivot point
 */

export interface IPivot {
  array: number[];
  start: number;
  end?: number;
}

export function pivot({
  array,
  start = 0,
  end = array.length + 1,
}: IPivot): number {
  let pivotPoint = array[start];
  let swapIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivotPoint > array[i]) {
      swapIndex++;
      swap({ array, index1: swapIndex, index2: i });
    }
  }
  swap({ array, index1: start, index2: swapIndex });
  return swapIndex;
}

/**
 * Heapify
 * Traverses the elements of an array (from back to front)
 * and uses shiftDown to arrange the numbers according to an
 * max heap structure.
 */
export function heapify(arr: number[]): void {
  for (let start = (arr.length >> 1) - 1; start >= 0; start--) {
    shiftDown(arr, start, arr.length - 1);
  }
}

/**
 * Shift Down
 * Traverses an set of an array and organizes the numbers in
 * the order of a max heap structure (parent larger than
 * children).
 */
export function shiftDown(arr: number[], start: number, end: number): void {
  let root = start;

  while (root * 2 + 1 <= end) {
    let leftChild = root * 2 + 1;
    let s = root;

    if (arr[s] < arr[leftChild]) {
      s = leftChild;
    }

    const rightChild = leftChild + 1;

    if (rightChild <= end && arr[s] < arr[rightChild]) {
      s = rightChild;
    }

    if (s !== root) {
      swap({ array: arr, index1: root, index2: s });
      root = s;
    } else {
      return;
    }
  }
}

/**
 * Heapify Recursive
 * Does the same as heapify and shiftDown together, but
 * in a recursive manner
 */
export function heapify_recursive(arr: number[], length: number, i: number) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    // Swap
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify_recursive(arr, length, largest);
  }

  return arr;
}

/**
 * Get Digit
 * Returns the digit at the index of a number
 * Ex: getDigit(4321, 0) returns 4
 */
export interface IGetDigit {
  num: number;
  place: number;
}

export function getDigit({ num, place }: IGetDigit): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Digit Count
 * Counts the number of digits in a number
 */
export function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Most Digits
 * Finds the number with the most digits in an array
 */
export function findMostDigitsFromNumbers(array: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
}

export function newGap(gap: number): number {
  gap = ((gap * 10) / 13) | 0;
  if (gap == 9 || gap == 10) gap = 11;
  if (gap < 1) gap = 1;
  return gap;
}
