import { SinglyLinkedList } from "./SinglyLinkedList";

describe("SinglyLinkedList", () => {
  describe("push", () => {
    it("takes a value and adds to the end of the List", () => {
      const list = new SinglyLinkedList();
      const val = "hello";
      list.push(val);

      expect(list.tail?.val).toEqual(val);
    });

    it("if the value is the first added, then both head and tail will be the same Node", () => {
      const list = new SinglyLinkedList();
      const val = "hello";
      list.push(val);

      expect(list.head?.val).toEqual(val);
      expect(list.tail?.val).toEqual(val);
    });

    it("if the value is NOT the first value added, then the head and tail will NOT be the same Node", () => {
      const list = new SinglyLinkedList();
      const val1 = "hello";
      const val2 = "people";

      list.push(val1);
      list.push(val2);

      expect(list.head?.val).toEqual(val1);
      expect(list.tail?.val).toEqual(val2);
    });

    it("increments the length by one", () => {
      const list = new SinglyLinkedList();

      expect(list.length).toEqual(0);

      list.push("value one");

      expect(list.length).toEqual(1);
    });
  });

  describe("pop", () => {
    it("returns the last Node from the List", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      const value = list.pop();
      expect(value).toEqual({ next: null, val: "value three" });
    });

    it("removes the last Node from the List", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      expect(list.head?.val).toEqual("value one");
      expect(list.tail?.val).toEqual("value three");

      list.pop();

      expect(list.head?.val).toEqual("value one");
      expect(list.tail?.val).toEqual("value two");
    });

    it("decrements the length by one", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");

      expect(list.length).toEqual(3);

      list.pop();

      expect(list.length).toEqual(2);
    });

    it("handles when there is only one Node left", () => {
      const list = new SinglyLinkedList();
      list.push("value one");

      const value = list.pop();

      expect(value).toEqual({ next: null, val: "value one" });
      expect(list.head?.val).toEqual(undefined);
      expect(list.tail?.val).toEqual(undefined);
      expect(list.length).toEqual(0);
    });
  });

  describe("shift", () => {
    it("returns the first Node from the List", () => {
      const list = new SinglyLinkedList();
      list.push("value one");

      const value = list.shift();
      expect(value).toEqual({ next: null, val: "value one" });
    });

    it("removes the first Node from the List", () => {
      const list = new SinglyLinkedList();
      list.push("value one");

      list.shift();
    });

    it("decrements the length by one", () => {
      const list = new SinglyLinkedList();
      list.push("value one");

      expect(list.length).toEqual(1);

      list.shift();

      expect(list.length).toEqual(0);
    });

    it("returns undefined if there is no Node", () => {});
  });

  describe("unshift", () => {
    it("adds a new Node with the value given at the start of the List", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.unshift("value two");
      expect(list.head?.val).toEqual("value two");
      expect(list.tail?.val).toEqual("value one");
    });

    it("sets head and tail to new Node if there are no previous Nodes", () => {
      const list = new SinglyLinkedList();
      list.unshift("value two");
      expect(list.head?.val).toEqual("value two");
      expect(list.head?.next).toEqual(null);
      expect(list.tail?.val).toEqual("value two");
      expect(list.tail?.next).toEqual(null);
    });

    it("increments the length by one", () => {
      const list = new SinglyLinkedList();
      expect(list.length).toEqual(0);
      list.unshift("value one");
      expect(list.length).toEqual(1);
    });
  });

  describe("get", () => {
    it("returns the (n)th item in the List", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");
      list.push("value four");
      list.push("value five");
      list.push("value six");
      list.push("value seven");
      list.push("value eight");

      const item = list.get(5);
      expect(item?.val).toEqual("value six");
    });

    it("returns undefined if there is no item", () => {
      const list = new SinglyLinkedList();
      const item = list.get(1);
      expect(item).toEqual(undefined);
    });
  });

  describe("set", () => {
    it("updates the value of item", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.set(0, "new value");
      expect(list.head?.val).toEqual("new value");
    });

    it("returns true if value is updated", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      const result = list.set(0, "new value");
      expect(result).toEqual(true);
    });

    it("returns false if there is no item to update", () => {
      const list = new SinglyLinkedList();
      const item = list.set(1, "new value");
      expect(item).toEqual(false);
    });
  });

  describe("insert", () => {
    it("returns false if n is less than zero", () => {
      const list = new SinglyLinkedList();
      expect(list.insert(-1, "value")).toEqual(false);
    });

    it("returns false if n is greater than length", () => {
      const list = new SinglyLinkedList();
      expect(list.insert(1, "value")).toEqual(false);
    });

    it("unshift a new Node to the start of the List if n is 0", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");
      list.push("value four");
      list.insert(0, "new value");
      expect(list.head?.val).toEqual("new value");
    });

    it("pushes a new Node to the end of the List if n same as length", () => {
      const list = new SinglyLinkedList();
      list.push("value one");
      list.push("value two");
      list.push("value three");
      list.push("value four");
      list.insert(4, "new value");
      expect(list.tail?.val).toEqual("new value");
    });

    it("increments the length by one", () => {
      const list = new SinglyLinkedList();
      expect(list.length).toEqual(0);
      list.insert(0, "new value");
      expect(list.length).toEqual(1);
    });

    it("returns true if insertion is successful", () => {
      const list = new SinglyLinkedList();
      expect(list.insert(0, "new value")).toEqual(true);
    });
  });
});
