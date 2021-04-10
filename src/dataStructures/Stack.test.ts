import Stack from "./Stack";

describe("Stack", () => {
  describe("push", () => {
    it("adds to the beginning of the Stack", () => {
      const stack = new Stack();

      stack.push("value one");
      expect(stack.first?.val).toEqual("value one");

      stack.push("value two");
      expect(stack.first?.val).toEqual("value two");
      expect(stack.last?.val).toEqual("value one");
    });

    it("increments Stack Size by one", () => {
      const stack = new Stack();
      expect(stack.size).toEqual(0);

      stack.push("value one");
      expect(stack.size).toEqual(1);
    });

    it("returns value of new Stack Size", () => {
      const stack = new Stack();
      expect(stack.size).toEqual(0);

      const returnedValue = stack.push("value one");
      expect(returnedValue).toEqual(1);
    });
  });

  describe("pop", () => {
    it("returns null of Stack is empty", () => {
      const stack = new Stack();

      const returnedValue = stack.pop();
      expect(returnedValue).toEqual(null);
    });

    it("returns the lastly added value", () => {
      const stack = new Stack();

      stack.push("value one");
      stack.push("value two");
      stack.push("value three");

      const returnedValue = stack.pop();
      expect(returnedValue).toEqual("value three");
    });

    it("removes the lastly added value from the Stack", () => {
      const stack = new Stack();

      stack.push("value one");
      stack.push("value two");
      stack.push("value three");
      expect(stack.first?.val).toEqual("value three");

      stack.pop();
      expect(stack.first?.val).toEqual("value two");
    });

    it("decrements Stack Size by one", () => {
      const stack = new Stack();

      stack.push("value one");
      stack.push("value two");
      stack.push("value three");
      expect(stack.size).toEqual(3);

      stack.pop();
      expect(stack.size).toEqual(2);
    });
  });
});
