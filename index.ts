import sorters from "./src/sorters";

/*
  Naive String Search
*/
function naiveSearch(string: string, find: string): number {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < find.length; j++) {
      // console.log(find[j], string[i + j]);
      if (find[j] !== string[i + j]) {
        console.log("BREAK");
        break;
      }
      if (j === find.length - 1) {
        console.log("FOUND MATCH");
        count++;
      }
    }
  }
  return count;
}
//naiveSearch('lorie loled', 'lo')

/*
  Checks if two strings are anagrams
  O(n)
*/
function validAnagram(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) return false;
  if (string1 === string2) return true;

  const charCounts: { [key: string]: number } = {};

  // Count number of times letter exists in string1
  for (let i = 0; i < string1.length; i++) {
    const letter = string1[i];
    charCounts[letter] ? (charCounts[letter] += 1) : (charCounts[letter] = 1);
  }

  // Compare char count in string2
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];

    if (!charCounts[letter]) {
      // doesn't exist or is zero
      return false;
    } else {
      // reduce count
      charCounts[letter] -= 1;
    }
  }

  return true;
}

/*
  Count number of unique values
  [1, 1, 2, 3, 3, 4, 5, 6, 6, 7] should return 7
*/
function countUniqueValues(arr: number[]) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

/*
  Find max sub-array sum
  Naive
  O(n^2)
  
  ([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) should return 19
*/
function maxSubarraySum(arr: number[], num: number) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let tmp = 0;
    for (let j = 0; j < num; j++) {
      tmp += arr[i + j];
    }
    if (tmp > max) {
      max = tmp;
    }
  }

  return max;
}

/* 
  Find max sub-array sum
  Sliding window pattern

  ([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) should return 19
*/
function maxSubarraySumSlidingWindow(arr: number[], num: number) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tmpSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tmpSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tmpSum = tmpSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tmpSum);
  }

  return maxSum;
}

// console.log(maxSubarraySumSlidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

const finders = {
  naiveSearch,
};

const counters = {
  maxSubarraySum,
  maxSubarraySumSlidingWindow,
  countUniqueValues,
};

const misc = {
  validAnagram,
};

module.exports = {
  sorters,
  finders,
  counters,
  misc,
};
