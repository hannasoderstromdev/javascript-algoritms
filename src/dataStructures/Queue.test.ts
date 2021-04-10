import Queue from "./Queue";

describe("Queue", () => {
  describe("enqueue", () => {
    it("adds to the end of the Queue", () => {
      const queue = new Queue();
      queue.enqueue("value one");
      queue.enqueue("value two");
      expect(queue.last?.val).toEqual("value two");

      queue.enqueue("value three");
      expect(queue.last?.val).toEqual("value three");
    });

    it("increments the size of the Queue by one", () => {
      const queue = new Queue();
      expect(queue.size).toEqual(0);

      queue.enqueue("value one");
      expect(queue.size).toEqual(1);
    });

    it("returns the new Queue Size", () => {
      const queue = new Queue();
      const returnedValue = queue.enqueue("value one");
      expect(returnedValue).toEqual(1);
    });
  });

  describe("dequeue", () => {
    it("removes from the start of the queue", () => {
      const queue = new Queue();
      queue.enqueue("value one");
      queue.enqueue("value two");
      expect(queue.first?.val).toEqual("value one");

      queue.dequeue();
      expect(queue.first?.val).toEqual("value two");
    });

    it("decrements the size of the Queue by one", () => {
      const queue = new Queue();
      queue.enqueue("value one");
      queue.enqueue("value two");
      expect(queue.size).toEqual(2);

      queue.dequeue();
      expect(queue.size).toEqual(1);
    });

    it("returns the value of the Node removed", () => {
      const queue = new Queue();
      queue.enqueue("value one");
      queue.enqueue("value two");

      const returnedValue = queue.dequeue();
      expect(returnedValue).toEqual("value one");
    });
  });
});
