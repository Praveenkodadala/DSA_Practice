//Selection sort
/**
 * 
 * In selection sort, the idea of the algorithm is to find the smallest unsorted element and
    add it to the end of the sorted list.
 * In pseudocode:
  • Repeat until no unsorted elements remain:
  • Search the unsorted part of the data to find the smallest value
  • Swap the smallest found value with the first element of the unsorted part
 * worst case o(n^2)
 * best case omega(n^2)
 */

let arr = [700, 800, 20, 30, 900, 1000, 2000, 10, 100, 300];

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
      //console.log(i, smallest);
    }
    if (i !== smallest) {
      //we will skip unnecessary swap if lowest is alredy in correct position
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
};

console.log(selectionSort(arr));
