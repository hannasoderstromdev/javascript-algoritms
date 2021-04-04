import { radixSort } from "./distributionSorts";

describe("radixSort", () => {
  it("returns a sorted array", () => {
    const unsortedArray = [1, 5, 2, 7, 9, 10, 13, 2, 3];
    const result = [1, 5, 2, 7, 9, 2, 3, 10, 13];

    expect(radixSort(unsortedArray)).toEqual(result);
  });
});
