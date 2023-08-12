/**
 * Insertion Sort
 * Builds up the sort by gradually creating a larger left half which is always sorted
 * so insted of finding the largerst element at a time or finding the smallest element at a time  it takes each element and place where is should go in sorted half
 * in pseudocode:
  • Start by picking the second element in the array
  • Now compare the second element with the one before it and swap if necessary.
  • Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
  • Repeat until the array is sorted.
 */

/*
let insertionSort = (arr)=>{
    //using for loops
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j]>currentVal; j--) {
           // console.log(arr[i], arr[j])
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

console.log(insertionSort([2, 9, 6, 43, 5]))
 */


let insertionSort = (arr)=> {
    //using while loop
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);

