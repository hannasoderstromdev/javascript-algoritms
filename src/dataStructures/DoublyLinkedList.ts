import Node from "./Node";

/*
 * Same as SinglyLinked List but with the benefit of links to
 * previous Node
 * Takes up more memory.
 * Finding a Node can in best case be done in half the time of
 * a Singly Linked List.
 *
 * Used for things like Browser History.
 */
class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any): DoublyLinkedList {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop(): Node | null | undefined {
    if (this.length === 0) return undefined;

    const tail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (this.tail)
        if (tail && tail.prev) {
          this.tail = tail?.prev;
          this.tail.next = null;
          tail.prev = null;
        }
    }

    this.length--;

    return tail;
  }

  shift(): Node | undefined {
    if (this.head === null) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      if (this.head) {
        this.head.prev = null;
      }
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val: any): DoublyLinkedList {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(n: number): Node | undefined | null {
    if (n < 0 || n >= this.length || this.head === null || this.tail === null)
      return undefined;

    let count: number;
    let current: Node | null | undefined;

    const isInFirstHalf = n <= this.length / 2;

    if (isInFirstHalf) {
      // Loop forward
      count = 0;
      current = this.head;
      while (count !== n) {
        current = current?.next;
        count++;
      }
    } else {
      // Loop backward
      count = this.length - 1;
      current = this.tail;
      while (count !== n) {
        current = current?.prev;
        count--;
      }
    }
    return current;
  }

  set(n: number, val: any): boolean {
    const foundNode = this.get(n);

    if (foundNode !== null && foundNode !== undefined) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(n: number, val: any): boolean {
    if (n < 0 || n > this.length) return false;
    if (n === 0) return Boolean(this.unshift(val));
    if (n === this.length) return Boolean(this.push(val));

    const newNode = new Node(val);
    const prevNode = this.get(n - 1);
    const nextNode = prevNode?.next;

    if (prevNode) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
    }

    if (nextNode !== undefined && nextNode !== null) {
      newNode.next = nextNode;
      nextNode.prev = newNode;
    }

    this.length++;

    return true;
  }

  remove(n: number): Node | null | undefined {
    if (n < 0 || n > this.length) return undefined;
    if (n === 0) return this.shift();
    if (n === this.length - 1) return this.pop();

    const foundNode = this.get(n);
    const prevNode = foundNode?.prev;
    const nextNode = foundNode?.next;

    if (foundNode !== null && foundNode !== undefined) {
      if (prevNode && nextNode) {
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      foundNode.next = null;
      foundNode.prev = null;
      this.length--;
      return foundNode;
    }
  }
}

export default DoublyLinkedList;
