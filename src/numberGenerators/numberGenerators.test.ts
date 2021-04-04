import {
  fibonacci,
  fibonacciMemoized,
  fibonacciTabulated,
} from "./numberGenerators";

describe("numberGenerators", () => {
  describe("fibonacci", () => {
    it("returns a fibonacci number", () => {
      const numberSeries = fibonacci(20);
      expect(numberSeries).toEqual(6765);
    });
  });

  describe("fibonacciMemoized", () => {
    it("returns a fibonacci number", () => {
      const numberSeries = fibonacciMemoized(15);
      expect(numberSeries).toEqual(610);
    });
  });

  describe("fibonacciTabulated", () => {
    it("returns a fibonacci number", () => {
      const numberSeries = fibonacciTabulated(10);
      expect(numberSeries).toEqual(55);
    });
  });
});
