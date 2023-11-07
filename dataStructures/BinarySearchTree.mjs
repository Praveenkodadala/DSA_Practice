/**
 * TREES
 * Binary tree and binary search tree
 * BinarySearchTree(BTS)
 * Every parent node has at most two children
 * Every node to the left of a parent node is always less than the parent
 * Every node to the right of a parent node is always greater than the parent
 */

//       10
//    5         13
// 2    7    11    16

//Inserting a node
/*
• Create a new node
• Starting at the root
• Check if there is a root, if not - the root now becomes that new node!
• If there is a root, check if the value of the new node is greater than or less than the value of the root
• If it is greater
• Check to see if there is a node to the right
• If there is, move to that node and repeat these steps
• If there is not, add that node as the right property
• if it is less
• Check to see if there is a node to the left 
• If there is, move to that node and repeat these steps
• If there is not, add that node as the left property
*/

//Finding a node
/*
• Starting at the root
• Check if there is a root, if not - we're done searching!
• If there is a root, check if the value of the new node is the value we are looking for.
If we found it, we're done!
• If not, check to see if the value is greater than or less than the value of the root
• If it is greater
• Check to see if there is a node to the right
• If there is, move to that node and repeat these steps
• If there is not, we're done searching!
• If it is less
• Check to see if there is a node to the left
• If there is, move to that node and repeat these steps
• If there is not, we're done searching!
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
}

let tree = new BinarySearchTree();

// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(15);
tree.insert(13);
tree.insert(16);
// console.log("tree-->", tree);
// console.log(tree.insert(16));
console.log(tree.find(10));
