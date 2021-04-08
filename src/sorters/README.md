# Sorting Algorithms

There are a bunch of different kind of sorting algorithms.
This library does not contain all of them. Some of them are
generally faster (quicksort) and some are generally slower (bubble sort) and some perform better under certain conditions.

The sorting algorithms are sorted by their type. Sometimes
there are more than one implementation.

[Read more on Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)

| bubbleSort()         |                                             |
| -------------------- | ------------------------------------------- |
| _Type_               | Loop in loop                                |
| _How it works_       | Swapping, sorting from smallest to largest. |
| _Positive_           | Simple, good for small data sets.           |
| _Negative_           | Inefficient for large data sets.            |
| _Efficiency Average_ | O(n^2)                                      |

| selectionSort()      |                                             |
| -------------------- | ------------------------------------------- |
| _Type_               | Loop in loop                                |
| _How it works_       | Swapping, sorting from largest to smallest. |
| _Positive_           | Simple, good for small data sets.           |
| _Negative_           | Inefficient for large data sets.            |
| _Efficiency Average_ | O(n^2)                                      |

| insertionSort()      |                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| _Type_               | Loop in loop                                                                                      |
| _How it works_       | Sorting into new array.                                                                           |
| _Positive_           | Simple, good for small data sets and nearly sorted data, or when new data is addded continuously. |
| _Negative_           | Inefficient for large data sets.                                                                  |
| _Efficiency Average_ | O(n^2)                                                                                            |

| mergeSort()          |                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| _Type_               | Recursive with loop                                                                                                               |
| _How it works_       | Splits arrays until each array has only one item (= is sorted). Then merge and sort each array until there's only one array left. |
| _Positive_           | More complex, good for large data sets                                                                                            |
| _Negative_           |                                                                                                                                   |
| _Efficiency Average_ | O(n log n)                                                                                                                        |

| quickSort()          |                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _Type_               | Recursive with loop                                                                                                                                                            |
| _How it works_       | Sets pivot on the mean value, puts smaller numbers left of pivot and larger right of pivot. Then sorts left half and right half of increasingly smaller sizes, until its done. |
| _Positive_           |                                                                                                                                                                                |
| _Negative_           | With too large data sets you might run out of call stacks.                                                                                                                     |
| _Efficiency Average_ | O(n log n)                                                                                                                                                                     |

| radixSort()          |                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| _Type_               | Loop in loop                                                                                              |
| _How it works_       | Sorts an array of integers by loop-sorting them in buckets by number and then putting them back together. |
| _Positive_           | Fast.                                                                                                     |
| _Negative_           | Only works on integers.                                                                                   |
| _Efficiency Average_ | O(n k)                                                                                                    |
