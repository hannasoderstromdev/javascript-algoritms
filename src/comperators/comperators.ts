/* 
  Compares if array2 has content of array1 squared
  Naive
  O(n ^2)
*/
export function sameSquared(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

/*
  Compares if array2 has content of array1 squared 
  Frequency Pattern
  O(n)
*/
export function sameSquared_frequency(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(Number(key) ** 2 in frequencyCounter2)) return false;

    if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key])
      return false;
  }

  return true;
}

/*
  Naive comparison
  Time complexity: O(n^2)
  Space complexity: O(1)
*/
export function sumZero(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

/*
  Implementing multiple pointers pattern
  Time complexity: O(n)
  Space complexity: O(1)
*/
export function sumZero_multiplePointers(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
