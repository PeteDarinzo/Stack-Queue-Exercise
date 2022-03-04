const LinkedList = require("./linked-list");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class LinkedListStack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    if (!this.first) {
      this.first = val;
      this.last = val
    } else {
      this.first = val;
    }
    this._list.unshift(val);
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const removed = this._list.shift();
    this.first = removed.next;
    this.size--;
    return removed;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = LinkedListStack;
