import { heapSort, heapSort_recursive } from "./selectionSorts";

describe("heapSort", () => {
  it("returns a sorted array", () => {
    const unsortedArray = [1, 5, 2, 7, 9, 10, 13, 2, 3];
    const result = [1, 2, 2, 3, 5, 7, 9, 10, 13];

    expect(heapSort(unsortedArray)).toEqual(result);
  });
});

describe("heapSort_recursive", () => {
  it("returns a sorted array", () => {
    const unsortedArray = [1, 5, 2, 7, 9, 10, 13, 2, 3];
    const result = [1, 2, 2, 3, 5, 7, 9, 10, 13];

    expect(heapSort_recursive(unsortedArray)).toEqual(result);
  });
});
