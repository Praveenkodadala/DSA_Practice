// https://visualgo.net/en/list

/**
 * A data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
 * Big O : insertion, searching, access  --> o(n)
 * removl - 0(1) or o(n),
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
    return currentHead;
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
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    //updating the index value
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index == this.length) return !!this.push(val); //double bang gives truthly result  //to maintain consistancy by returning true and false
    if (index == 0) return !!this.unshift(val);
    let currentNode = this.get(index);
    let previousNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length++;
    return true; // or return this
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index == this.length - 1) return !!this.pop();
    if (index == 0) return !!this.shift();
    let currentNode = this.get(index);
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = currentNode.next;
    this.length--;
    return removed;
  }
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prevNode = null;
    let nextNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next; //store currentNode.next in temp variable, and assign current.next to prev node and last assign temp var to currentnode
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}
let list = new SinglyLinkedList();
list.push("hi");
list.push("how");
list.push("are");
list.push("you");
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

// list.unshift("eweds");
// list.unshift("sdsdf");
// list.unshift("sdsdsdfsf");
// list.unshift("sdsdww");
console.log(list);

// console.log(list.get(2))
// console.log(list.get(6))

// console.log(list.set(1, "yoo"));
// console.log(list);

console.log(list.insert(1, "praveen"));
// console.log(list);

console.log(list.length);
// console.log(list.remove(4));
console.log(list);
console.log(list.reverse());
console.log(list);

console.log(list.print());
