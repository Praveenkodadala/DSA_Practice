/**
 * BFS - Breadth first search
 * Create a queue (this can be an array) and a variable to store the values of nodes visited
 * Place the root node in the queue
 * Loop as long as there is anything in the queue
 * Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
 * If there is a left property on the node dequeued - add it to the queue
 * If there is a right property on the node dequeued - add it to the queue
 */

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          console.log("duplicates");
          return undefined;
        }
      }
    }
  }
  find(value) {
    //contains true/false
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    // if(!found) return undefined   //if not found we can return false or undefined
    // return current                 //if found return node or true
    return false;
  }

  BFS() {
    let node = this.root
    let data = []
    let queue = []

    queue.push(node)

    while(queue.length){
        node  =  queue.shift()
        data.push(node.value)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return data

  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(15);
tree.insert(13);
tree.insert(16);
console.log("tree", tree);
console.log(tree.BFS());
