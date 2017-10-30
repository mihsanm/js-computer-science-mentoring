import Node from './node';

export default class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  // delete the top element of stack
  pop() {

  }

  // add element on top of stack
  push(value) {
    let currentNode = this.top;
    this.top = new Node(value);
    this.top.next = currentNode;
    this.length++;
  }

  // returns value of top stack element
  peek() {

  }
}
