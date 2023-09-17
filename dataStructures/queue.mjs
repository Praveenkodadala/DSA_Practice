
/** 
 * Queue
 * Queue A FIFO data structure
 * Big o : insertion, removal --> o(1)
 * searching and access --> o(n)
*/

/*
Enqueue - adding from last
Dequeue - removing from first
=========
1 -> 2 -> 3->
==========
*/
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last =  this.first;
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this.size
    }
    dequeue(){
          if(!this.first) return null
          if (this.size === 1) {
            this.first = null;
            this.last = null;
            return null;
          }
          let temp= this.first
          this.first = temp.next
          return temp.val
    }
    print() {
        let current = this.first;
        let tempArr = [];
        while (current) {
          tempArr.push(current.val);
          current = current.next;
        }
        return tempArr;
        // return tempArr.reverse();
      }
}

let queue = new Queue()
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(233434))
console.log(queue)
console.log(queue.print())
console.log(queue.dequeue())
console.log(queue.print())
console.log(queue.dequeue())
console.log(queue.print())
console.log(queue.dequeue())
console.log(queue.print())
console.log(queue.dequeue())
console.log(queue.print())
console.log(queue.dequeue())
console.log(queue.print())


