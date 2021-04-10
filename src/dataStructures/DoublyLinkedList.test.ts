import DoublyLinkedList from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
  describe("push", () => {
    it("adds a Node to the end of the List", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      list.push("value two");
      expect(list.tail?.val).toEqual("value two");

      list.push("value three");
      expect(list.tail?.val).toEqual("value three");
    });

    it("adds Node when the List is previously empty", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      expect(list.head?.val).toEqual("value one");
      expect(list.tail?.val).toEqual("value one");
    });

    it("increments length by one", () => {
      const list = new DoublyLinkedList();
      expect(list.length).toEqual(0);

      list.push("value one");
      expect(list.length).toEqual(1);

      list.push("value two");
      expect(list.length).toEqual(2);
    });
  });

  describe("pop", () => {
    it("removes Node at end of the List", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      expect(list.tail?.val).toEqual("value one");

      list.pop();
      expect(list.tail).toEqual(null);
    });

    it("returns undefined if List is empty", () => {
      const list = new DoublyLinkedList();
      expect(list.head).toEqual(null);

      const result = list.pop();
      expect(result).toEqual(undefined);
    });

    it("decrements length by one", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      expect(list.length).toEqual(1);

      list.pop();
      expect(list.length).toEqual(0);
    });

    it("returns the removed Node", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      list.push("value two");

      const result = list.pop();
      expect(result).toEqual({
        next: null,
        prev: null,
        val: "value two",
      });
    });
  });

  describe("shift", () => {
    it("removes Node at beginning of the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      expect(list.head?.val).toEqual("value one");

      list.shift();
      expect(list.head?.val).toEqual("value two");
    });

    it("returns undefined if List is empty", () => {
      const list = new DoublyLinkedList();
      const result = list.shift();
      expect(result).toEqual(undefined);
    });

    it("decrements length by one", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      expect(list.length).toEqual(1);

      list.shift();
      expect(list.length).toEqual(0);
    });

    it("returns the removed Node", () => {
      const list = new DoublyLinkedList();
      list.push("value one");

      const result = list.shift();
      expect(result).toEqual({ next: null, val: "value one" });
    });
  });

  describe("unshift", () => {
    it("adds a Node at the beginning of the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      expect(list.head?.val).toEqual("value one");

      list.unshift("value two");
      expect(list.head?.val).toEqual("value two");
    });

    it("adds a Node when the List is previously empty", () => {
      const list = new DoublyLinkedList();

      list.unshift("value one");
      expect(list.head?.val).toEqual("value one");
      expect(list.tail?.val).toEqual("value one");
    });

    it("increments length by one", () => {
      const list = new DoublyLinkedList();
      expect(list.length).toEqual(0);

      list.unshift("value one");
      expect(list.length).toEqual(1);
    });
  });

  describe("get", () => {
    it("returns the Node at place n", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      const result = list.get(1);
      expect(result?.val).toEqual("value two");
    });

    it("returns undefined if n does not exist", () => {
      const list = new DoublyLinkedList();
      expect(list.get(0)).toEqual(undefined);
      expect(list.get(-1)).toEqual(undefined);
    });

    it("returns Node at the first half of of the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      const result = list.get(0);
      expect(result?.val).toEqual("value one");
    });

    it("returns Node at the second half of of the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      const result = list.get(2);
      expect(result?.val).toEqual("value three");
    });
  });

  describe("set", () => {
    it("updates the value at place n", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      list.set(2, "new value");
      expect(list.tail?.val).toEqual("new value");
    });

    it("returns false if no value exist at place n", () => {
      const list = new DoublyLinkedList();
      expect(list.set(0, "new value")).toEqual(false);
    });
  });

  describe("insert", () => {
    it("inserts value into the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      list.insert(2, "new value");
      const result = list.get(2);

      expect(result?.val).toEqual("new value");
    });

    it("inserts value at beginning of List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      expect(list.head?.val).toEqual("value one");

      list.insert(0, "new value");
      expect(list.head?.val).toEqual("new value");
    });

    it("inserts value at the end of the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      expect(list.tail?.val).toEqual("value two");

      list.insert(2, "new value");
      expect(list.tail?.val).toEqual("new value");
    });

    it("increments length by one", () => {
      const list = new DoublyLinkedList();
      expect(list.length).toEqual(0);

      list.insert(0, "new value");
      expect(list.length).toEqual(1);
    });

    it("returns false if n is outside the range of the List", () => {
      const list = new DoublyLinkedList();

      const resultNegativeNumber = list.insert(-1, "new value");
      expect(resultNegativeNumber).toEqual(false);

      const resultOutOfRange = list.insert(1, "new value");
      expect(resultOutOfRange).toEqual(false);
    });

    it("returns true when it has added a value", () => {
      const list = new DoublyLinkedList();
      expect(list.insert(0, "new value")).toEqual(true);
    });
  });

  describe("remove", () => {
    it("returns undefined if n is outside the range of the List", () => {
      const list = new DoublyLinkedList();
      expect(list.remove(-1)).toEqual(undefined);
      expect(list.remove(0)).toEqual(undefined);
    });

    it("removes Node from inside the List", () => {
      const list = new DoublyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      expect(list.get(1)?.val).toEqual("value two");
      expect(list.remove(1)?.val).toEqual("value two");
    });
    it("removes Node from the beginning of the List", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      list.push("value two");
      list.push("value three");
      expect(list.head?.val).toEqual("value one");

      list.remove(0);
      expect(list.head?.val).toEqual("value two");
    });

    it("removes Node from the end of the List", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      list.push("value two");
      list.push("value three");
      expect(list.tail?.val).toEqual("value three");

      list.remove(2);
      expect(list.tail?.val).toEqual("value two");
    });

    it("decrements the length by one", () => {
      const list = new DoublyLinkedList();

      list.push("value one");
      list.push("value two");
      list.push("value three");
      expect(list.length).toEqual(3);

      list.remove(1);
      expect(list.length).toEqual(2);
    });
  });
});
