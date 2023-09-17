/**
 * Doubly linked list
 * It has both directions it points to the next item and the item behind it the previous item
 * more memory === more flexibility
 * Big O : insertion, removal -> 0(1)
 * searching, access  --> o(n)
 */

// Node:
// --val
// --next
// --prev

//singly lined list:
//--head
//--tail
//--length

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, counter;
    if (index < this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val); // by !! making result to boolean
    if (index == this.length) return !!this.push(val);

    let newNode = new Node(val);
    let currentNode = this.get(index);
    let previousNode = this.get(index - 1);

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); // by !! making result to boolean
    if (index == this.length - 1) return this.pop();

    let removeNode = this.get(index);
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }

  print() {
    let temp = [];
    let current = this.head;
    while (current) {
      temp.push(current.val);
      current = current.next;
    }
    return temp;
  }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
console.log(list);
console.log(list.print());
// console.log(list.pop())
// console.log(list.print())
// console.log(list.shift());
// console.log(list.print());
// console.log(list.unshift(5));
// console.log(list.print());
// console.log(list.get(1));

// console.log(list.set(40, 2));
// console.log(list.print());
// console.log(list.insert(40, 3));
// console.log(list.print());

console.log(list.remove(6));
console.log(list.print());
