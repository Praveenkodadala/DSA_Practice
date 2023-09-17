/**
 * STACKS
 * stacks and ques both are the data collections or data structures
 * stacks A LIFO data structure
 * the last element added to the stack will be the first element removed from the stack
 * use cases:managing function invocations,undo/redo functionality,browser history
 * pushing and popping should be in constant time
 * Big o : insertion, removal --> o(1)
 * searching and access --> o(n)
 */

//lets assume stack is a cylindrical shaped obj -
/*
=========
  3->2->1->
==========
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
/*
//Another way to push
  push(val){
    var newNode = new Node(val);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    } else {
        var temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
    return ++this.size;
}
 */

  pop() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      return null;
    }
    let temp = this.last;
    this.last = temp.next;
    this.size--;
    return temp.val;
  }
/*
//Another way to pop
pop(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
}
*/

  print() {
    let current = this.last;
    let tempArr = [];
    while (current) {
      tempArr.push(current.val);
      current = current.next;
    }
    return tempArr;
    // return tempArr.reverse();
  }
}

let stack = new Stack();
console.log(stack.push("first"));
console.log(stack.push("second"));
console.log(stack.push("third"));
console.log(stack.push("fourth"));
console.log(stack);
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.pop());
