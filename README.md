# JavaScript Algorithms

Library for a bunch of useful JavaScript algorithms.

## Installation

`npm install javascript-algorithms`

## Content

### Sorters

The sorters package contains a number of different kind of sorters which have different benefits and strengths. You can read more about them in detail [here]().

### Number Generators

Number generators can be used for creating different kind of numbers and number series.

### Data Structures

JavaScript doesn't inherently support certain types of Lists that exist in other languages. These classes will allow you to use List types such as _Singly Linked List_, _Doubly Linked List_, _Stacks_ and _Queues_.

## Example (Sorters)

```typescript
import { sorters } from "javascript-algorithms";

const arrayToSort = [1, 6, 2, 5, 9, 10, 11, 3, 4, 12];

sorters.selectionSorts.quicksort_inPlace(arrayToSort);

console.log(arrayToSort); // [1, 2, 3, 4, 5, 6, 9, 10, 11, 12]
```

Note: Some sorters sorts in-place, meaning they will mutate the original array. If you want to keep the original array untouched, you need to first make a copy.

```typescript
import { sorters } from "javascript-algorithms";

const unsortedArray = [1, 6, 2, 5, 9, 10, 11, 3, 4, 12];

const arrayToSort = [...unsortedArray];

sorters.selectionSorts.quicksort_inPlace(arrayToSort);

console.log(arrayToSort); // [1, 2, 3, 4, 5, 6, 9, 10, 11, 12]
```
