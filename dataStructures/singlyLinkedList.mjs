// https://visualgo.net/en/list

/**
 * A data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
 */

//   node-->  nod-->  node-->  node-->

//  Head // first node
//  tail //last node
//  next // --> address of next tail

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
let firstNode = new Node('hi')
firstNode.next = new Node("how")
firstNode.next.next = new Node("are")
firstNode.next.next.next = new Node("you")

console.log(firstNode)
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head; //both current and newTail start with same elm and in the end current will become current.next and tail become current(that means previous one, last but one)
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    if (this.length === 1) {
      this.head = null; // Update head to null if the list has only one element
      this.tail = null; // Update tail to null as well
    } else {
      this.tail.next = null;
    }
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return this.head;
  }
  unshift(val) {
    let newNode = new Node(val);
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
}

let list = new SinglyLinkedList();
//list.push("hi");
// list.push("how");
// list.push("are");
// list.push("you");
console.log(list);

// list.pop();
// list.pop();
//list.pop();
// list.pop();
console.log(list);

// list.shift()
// list.shift()
// list.shift()
console.log(list);

list.unshift("1");
list.unshift("2");
console.log(list);
