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
    if (!this.head) return undefined;

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
    if (!this.head) return undefined;

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
    if (n < 0 || n > this.length) return false;
    if (n === 0) return Boolean(this.unshift(val));
    if (n === this.length) return Boolean(this.push(val));

    const prevNode = this.get(n - 1);

    if (prevNode) {
      const newNode = new Node(val);
      const temp = prevNode?.next;
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }

    return false;
  }

  remove(n: number): Node | undefined {
    if (n < 0 || n >= this.length) return undefined;
    if (n === 0) return this.shift();
    if (n === this.length - 1) return this.pop();

    const prevNode = this.get(n - 1);

    if (prevNode && prevNode.next) {
      const removed = prevNode?.next;
      prevNode.next = removed?.next;
      this.length--;
      return removed;
    }
  }

  reverse(): SinglyLinkedList {
    // swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    // swap all nodes
    for (let i = 0; i < this.length; i++) {
      next = node?.next;
      if (node) {
        node.next = prev;
        prev = node;
      }
      if (next) {
        node = next;
      }
    }

    return this;
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
