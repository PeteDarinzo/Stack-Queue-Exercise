const LinkedList = require("./linked-list");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class LinkedListQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (!this.size) {
      this.first = val;
      this.last = val;
    } else {
      this.last = val;
    }
    this._list.push(val);
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const removed = this._list.shift();
    this.first = removed.next;
    this.size--;
    return removed;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = LinkedListQueue;
