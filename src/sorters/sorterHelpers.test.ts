import {
  swap,
  pivot,
  getDigit,
  digitCount,
  findMostDigitsFromNumbers,
  shiftDown,
} from "./sorterHelpers";

describe("Helpers", () => {
  describe("swap", () => {
    it("will swap places of two numbers", () => {
      const arr = [1, 3];
      const swapped = [3, 1];

      swap({ array: arr, index1: 0, index2: 1 });

      expect(arr).toEqual(swapped);
    });
  });

  describe("pivot", () => {
    it("swaps items smaller than the starting pivot value to the left and then returns the new pivot index", () => {
      const arr = [5, 2, 1, 8, 4, 7, 6, 3];
      const newPivotIndex = pivot({ array: arr, start: 0 });

      expect(arr).toEqual([3, 2, 1, 4, 5, 7, 6, 8]);
      expect(newPivotIndex).toEqual(4);
    });
  });

  describe("getDigit", () => {
    it("returns digit at place in number", () => {
      const num = 12345;

      // places that doesn't exist returns 0
      expect(getDigit({ num, place: -1 })).toEqual(0);

      // place 0 at 1st
      expect(getDigit({ num, place: 0 })).toEqual(5);

      // place 1 at 10th
      expect(getDigit({ num, place: 1 })).toEqual(4);

      // place 2 at 100ed
      expect(getDigit({ num, place: 2 })).toEqual(3);

      // place 3 at 1000nd
      expect(getDigit({ num, place: 3 })).toEqual(2);

      // place 4 at 10000nd
      expect(getDigit({ num, place: 4 })).toEqual(1);

      // place 5 doesn't exist, returns 0
      expect(getDigit({ num, place: 5 })).toEqual(0);

      // place 6 doesn't exist, returns 0
      expect(getDigit({ num, place: 6 })).toEqual(0);
    });
  });

  describe("digitCount", () => {
    it("counts the number of digits in a number", () => {
      expect(digitCount(-31)).toEqual(2);
      expect(digitCount(-2)).toEqual(1);
      expect(digitCount(5)).toEqual(1);
      expect(digitCount(51)).toEqual(2);
      expect(digitCount(151)).toEqual(3);
      expect(digitCount(1521)).toEqual(4);
      expect(digitCount(16521)).toEqual(5);
    });
  });

  describe("findMostDigitsFromNumbers", () => {
    it("finds number of digits in the largest number in an array of numbers", () => {
      const numbers = [12, 555, 16, 1677, 391, 10];

      // 1677 is largest and it has 4 digits
      expect(findMostDigitsFromNumbers(numbers)).toEqual(4);
    });
  });

  describe("shiftDown", () => {
    it("", () => {
      const numbers = [12, 555, 16, 1677, 391, 10];
      shiftDown(numbers, 0, 6);
      expect(numbers).toEqual([]);
    });
  });
});
