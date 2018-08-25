# JavaScript Algorithms

Snippets for a bunch of useful JavaScript algorithms.

## Beginner

| naiveSearch()  |                                                                            |
| -------------- | -------------------------------------------------------------------------- |
| _How it works_ | Compares a string with another string and returns number of matches found. |
| _Positive_     | Simple, good for small data sets.                                          |
| _Negative_     | Inefficient for large data sets.                                           |
| _Efficiency_   | O(n^2)                                                                     |

| bubbleSort()   |                                             |
| -------------- | ------------------------------------------- |
| _How it works_ | Swapping, sorting from smallest to largest. |
| _Positive_     | Simple, good for small data sets.           |
| _Negative_     | Inefficient for large data sets.            |
| _Efficiency_   | O(n^2)                                      |

| selectionSort() |                                             |
| --------------- | ------------------------------------------- |
| _How it works_  | Swapping, sorting from largest to smallest. |
| _Positive_      | Simple, good for small data sets.           |
| _Negative_      | Inefficient for large data sets.            |
| _Efficiency_    | O(n^2)                                      |

| insertionSort() |                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| _How it works_  | Sorting into new array.                                                                           |
| _Positive_      | Simple, good for small data sets and nearly sorted data, or when new data is addded continuously. |
| _Negative_      | Inefficient for large data sets.                                                                  |
| _Efficiency_    | O(n^2)                                                                                            |

## Intermediate

| mergeSort()    |                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| _How it works_ | Splits arrays until each array has only one item (= is sorted). Then merge and sort each array until there's only one array left. |
| _Positive_     | More complex, good for large data sets                                                                                            |
| _Negative_     |                                                                                                                                   |
| _Efficiency_   | O(n log n)                                                                                                                        |
