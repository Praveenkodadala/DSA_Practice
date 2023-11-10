/**
 * DFS-InOrder (Depth first search)
 * steps - (recursively)
 * preOrder--> postOrder-->InOrder
 * Create a variable to store the values of nodes visited
 * Store the root of the BST in a variable called current
 * Write a helper function which accepts a node
 * If the node has a left property, call the helper function with the left property on the node
 * Push the value of the node to the variable that stores the values
 * If the node has a right property, call the helper function with the right property on the node
 * Invoke the helper function with the current variable
 * Return the array of values
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
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
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
// console.log(tree.BFS());
// console.log("check", tree.DFSPreOrder());
//console.log("check", tree.DFSPostOrder());
console.log("check", tree.DFSInOrder());
