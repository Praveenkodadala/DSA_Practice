/**
 * Heaps
 * max binary heaps
 * Push the value into the values property on the heap
 * Bubble Up:
 * Create a variable called index which is the length of the values property - 1
 * Create a variable called parentindex which is the floor of (index-1)/2
 * Keep looping as long as the values element at the parentindex is less than the values element at the child index
 * Swap the value of the values element at the parentindex with the value of the element property at the child index
 * Set the index to be the parentindex, and start over!
 */

/**
 * Defining our class
 * Class name - MaxBinaryHeap
 * Properties - values = []
 */

class MaxBinaryHeap {
    constructor() {
      this.values = [55, 39, 41, 18, 27, 12, 33];
    }
  
    insert(element) {
      this.values.push(element);
      this.bubbleUp();
      return this.values;
    }
  
    bubbleUp() {
      let idx = this.values.length - 1;
      let element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element <= parent) break;
        // Swap
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
  
    extractMax() {
      if (this.values.length === 0) {
        return null;
      }
  
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.swapDown();
      }
  
      return max;
    }
  
    swapDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
  
      while (true) {
        const leftChildIdx = 2 * idx + 1;
        const rightChildIdx = 2 * idx + 2;
        let swap = null;
  
        if (leftChildIdx < length) {
          const leftChild = this.values[leftChildIdx];
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < length) {
          const rightChild = this.values[rightChildIdx];
          if ((swap === null && rightChild > element) || (swap !== null && rightChild > this.values[swap])) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) {
          break;
        }
  
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }
  
  let heap = new MaxBinaryHeap();
  console.log(heap.extractMax()); // 55
  console.log(heap.extractMax()); // 41
  console.log(heap.extractMax()); // 39
  console.log(heap.extractMax()); // 33
  console.log(heap.extractMax()); // 27
  console.log(heap.extractMax()); // 18
  console.log(heap.extractMax()); // 12
  console.log(heap.extractMax()); // null (empty heap)
  
