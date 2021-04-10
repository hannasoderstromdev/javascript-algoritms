# Data Structures

JavaScript doesn't inherently have support for several of the type of lists that other languages support. This is a list of such data structures implemented via JavaScript class-syntax (with Typescript).

## Singly Linked List

List of Nodes with references to next only.

- Good for insertion in the entire List and removal at the beginning of the list
- Bad for searching and access

Performance:

- Insertion - O(1)
- Removal - Removing first O(1) otherwise O(n)
- Searching - O(n)
- Access - O(n)

## Doubly Linked List

List of Nodes with references to previous and next.

- Good for insertion and removing in the entire list
- Bad for searching and access

Performance:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)

## Stack

Adds to start, removes from start

- Good for insertion and removal
- Bad for searching and access

Performance:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)

## Queue

Adds to end, removes from start

- Good for insertion and removal
- Bad for searching and access

Performance:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)
