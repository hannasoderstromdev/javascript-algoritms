import Node from "./Node";

/*
 * Stack
 *
 * Last added is first removed.
 *
 * Examples:
 *  - The Call Stack in JavaScript
 *  - Undo/Redo functionality
 *  - Routing History
 */

export default class Stack {
  first: null | Node;
  last: null | Node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: any): number {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }

    return ++this.size;
  }

  pop(): null | any {
    if (this.size === 0) return null;

    const tmp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    if (this.first) {
      this.first = this.first?.next;
    }

    this.size--;

    return tmp?.val;
  }
}
