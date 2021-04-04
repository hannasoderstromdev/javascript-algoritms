import exchangeSorts from "./exchangeSorts";
import selectionSorts from "./selectionSorts";
import insertionSorts from "./insertionSorts";
import mergeSorts from "./mergeSorts";
import distributionSorts from "./distributionSorts";

/*
 * JavaScript Built-in sorting
 *
 * Comparison (will vary, use for relative comparison only)
 *   100 items 0.168ms
 *   1000 items 0.46ms
 *   10000 items 4.45ms
 *   100000 items 39.621ms
 *   1000000 items 358.801ms
 */

export function jsSort(arr: number[]): number[] {
  const arrayCopy = [...arr];
  return arrayCopy.sort(function (a, b) {
    return a - b;
  });
}

const sorters = {
  jsSort,
  exchangeSorts,
  selectionSorts,
  insertionSorts,
  mergeSorts,
  distributionSorts,
};

export default sorters;
