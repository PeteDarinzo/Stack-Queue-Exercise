const DoublyLinkedList = require("./doubly-linked-list");

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new DoublyLinkedList();
  }

  /** appendLeft(val): add new value to the beginning of the deque. Returns undefined. */

  appendLeft(val) {
    if (!this.size) {
      this.first = val;
      this.last = val;
    } else {
      this.first = val;
    }
    this._list.unshift(val);
    this.size++;
  }

  /** appendLeft(val): add new value to the end of the deque. Returns undefined. */

  appendRight(val) {
    if (!this.size) {
      this.first = val;
      this.last = val;
    } else {
      this.last = val;
    }
    this._list.push(val);
    this.size++;
  }

  /** popLeft(): remove the node from the beginning of the deque
 * and return its value. Should throw an error if the deque is empty. */

  popLeft() {
    const removed = this._list.shift();
    this.first = removed.next;
    this.size--;
    return removed;
  }

  /** popLeft(): remove the node from the end of the deque
* and return its value. Should throw an error if the deque is empty. */

  popRight() {
    const removed = this._list.pop();
    this.last = removed.prev;
    this.size--;
    return removed;
  }

  /** peekLeft(): return the value of the first node in the deque. */

  peekLeft() {
    return this.first;
  }

  /** peekRight(): return the value of the first node in the deque. */

  peekRight() {
    return this.last;
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;