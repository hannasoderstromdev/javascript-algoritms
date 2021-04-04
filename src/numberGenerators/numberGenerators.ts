/* 
  Fibonacci number generator
  Don't use numbers larger than 40
  Complexity: O(1.6^2)
*/
export function fibonacci(n: number): number {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* 
  Fibonacci number generator
  Memoized (can cause stack overflow)
  Complexity: O(n)
*/
const memoDefault = [undefined, 1, 1];

export function fibonacciMemoized(n: number, memo = memoDefault): number {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  let result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  memo[n] = result;
  return result;
}

/* 
  Fibonacci number generator
  Tabulated
  Complexity: O(n)
*/
export function fibonacciTabulated(n: number): number {
  if (n <= 2) return 1;

  let fibonacciNumbers = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
  }

  return fibonacciNumbers[n];
}
