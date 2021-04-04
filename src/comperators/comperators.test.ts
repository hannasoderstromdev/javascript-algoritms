import {
  sameSquared,
  sameSquared_frequency,
  sumZero,
  sumZero_multiplePointers,
} from "./comperators";

describe("comperators", () => {
  describe("sameSquared", () => {
    it("returns false if both arrays are not of the same length", () => {
      const arr1 = [1, 4, 66];
      const arr2 = [1, 4];
      expect(sameSquared(arr1, arr2)).toEqual(false);
    });

    it("returns true if ALL the values in arr1^2 are equal to the values in arr2", () => {
      // 3^2 = 9,
      // 5^2 = 25
      // values 9 and 25 are correct, hence, should return true
      const arr1 = [3, 5];
      const arr2 = [9, 25];
      expect(sameSquared(arr1, arr2)).toEqual(true);
    });

    it("returns false if BOTH the values in arr1^2 are NOT equal to the values in arr2", () => {
      // 2^2 = 4
      // 4^2 = 16
      // values 2 and 5 are incorrect, hence, should return false
      const arr1 = [2, 4];
      const arr2 = [2, 5];
      expect(sameSquared(arr1, arr2)).toEqual(false);
    });

    it("returns false if ANY of the values in arr1^2 are NOT equal to the values in arr2", () => {
      // 1^2 = 1
      // 3^2 = 9
      // values 1 is correct but 5 is incorrect, hence, should return false
      const arr1 = [1, 3];
      const arr2 = [1, 5];
      expect(sameSquared(arr1, arr2)).toEqual(false);
    });
  });

  describe("sameSquared_frequency", () => {
    it("returns false if both arrays are not of the same length", () => {
      const arr1 = [1, 4, 66];
      const arr2 = [1, 4];
      expect(sameSquared_frequency(arr1, arr2)).toEqual(false);
    });

    it("returns true if ALL the values in arr1^2 are equal to the values in arr2", () => {
      const arr1 = [1, 3, 3];
      const arr2 = [1, 9, 9];
      expect(sameSquared_frequency(arr1, arr2)).toEqual(true);
    });

    it("returns false if BOTH the values in arr1^2 are NOT equal to the values in arr2", () => {
      // 2^2 = 4
      // 4^2 = 16
      // values 2 and 5 are incorrect, hence, should return false
      const arr1 = [2, 4];
      const arr2 = [2, 5];
      expect(sameSquared_frequency(arr1, arr2)).toEqual(false);
    });

    it("returns false if ANY of the values in arr1^2 are NOT equal to the values in arr2", () => {
      // 1^2 = 1
      // 3^2 = 9
      // values 1 is correct but 5 is incorrect, hence, should return false
      const arr1 = [1, 3];
      const arr2 = [1, 5];
      expect(sameSquared_frequency(arr1, arr2)).toEqual(false);
    });
  });

  describe("sumZero", () => {
    it("returns the two first values that when added together sums to zero", () => {
      const arr = [1, -1, 2, 2, -2];
      expect(sumZero(arr)).toEqual([1, -1]);
    });

    it("returns an empty array if no values added together sums to zero", () => {
      const arr = [1, 2, 2, 2, 3];
      expect(sumZero(arr)).toEqual([]);
    });
  });
});
