import { quickSort_naive } from "./exchangeSorts";

describe("quickSort_naive", () => {
  it("returns a sorted array", () => {
    const unsortedArray = [1, 5, 2, 7, 9, 10, 13, 2, 3];
    const result = [1, 2, 2, 3, 5, 7, 9, 10, 13];

    expect(quickSort_naive(unsortedArray)).toEqual(result);
  });
});
