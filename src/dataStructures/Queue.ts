import Node from "./Node";

/*
 * Queue
 *
 * Similar to a Stack, optimized for adding and removing values.
 * Follows the principle of "first in, first out".
 *
 * Examples:
 * - Players waiting for access to a game server.
 */

export default class Queue {
  first: null | Node;
  last: null | Node;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: any): number {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last) {
        this.last.next = newNode;
        this.last = newNode;
      }
    }
    return ++this.size;
  }

  dequeue(): any {
    if (this.size === 0) return null;

    const tmp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    if (this.first) {
      this.first = this.first.next;
    }
    this.size--;
    return tmp?.val;
  }
}
