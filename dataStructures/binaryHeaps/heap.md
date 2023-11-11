heaps

Very similar to a binary search tree, but with some different rules!
In a MaxBinaryHeap, parent nodes are always larger than child nodes. 
In a MinBinaryHeap, parent nodes are always smaller than child nodes

why do we need to know this?
Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
They are also used quite a bit, with graph traversal algorithms.

For any index of an array n...
The left child is stored at 2n + 1
The right child is at 2n + 2

For any child node at index n...
Its parent is at index (n-1)/2