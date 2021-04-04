/*
 * Data structure of nodes that contains a head, tail
 * and length property.
 *
 * Each node has value and a next pointer to another node, or null.
 *
 * Unlike an array:
 * - It does not have an index
 * - Each node is only linked to the next node
 * - Random access is not allowed
 *
 * Good for fast insertion and deletion of data.
 * Bad for accessing data.
 */
export class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any): SinglyLinkedList {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length++;
    return this;
  }

  pop(): Node | undefined {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(): Node | undefined {
    if (!this.head) {
      return undefined;
    }

    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedHead;
  }

  unshift(val: any): SinglyLinkedList {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(n: number): Node | undefined | null {
    if (n < 0 || n >= this.length) return undefined;

    let i = 0;
    let current: Node | undefined | null = this.head;

    while (i !== n) {
      current = current?.next;
      i++;
    }

    return current;
  }

  set(n: number, val: any): boolean {
    const foundNode = this.get(n);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(n: number, val: any): boolean {
    if (n < 0 || n > this.length) {
      return false;
    }

    if (n === 0) {
      return Boolean(this.unshift(val));
    }

    if (n === this.length) {
      return Boolean(this.push(val));
    }

    const prev = this.get(n - 1);

    if (prev) {
      const newNode = new Node(val);
      const temp = prev?.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }

    return false;
  }
}

class Node {
  val: any;
  next: Node | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}
