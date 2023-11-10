/**
 * QuickSort
 * 
• Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
• Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
• Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
*like pick one pivot(element)
*move all the elements less then pivot to left and greater then pivot to right 
*do recursion
*Best Case: O(n log n)
*Average Case: O(n log n)
*Worst Case: O(n^2)
 */

/**
 *
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 * @returns swapIndex
 */

let pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log("arr", arr);
  return swapIdx;
};
//swap func
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// console.log(pivot([84, 644, 62, 100, 61, 20, 19, 700]));

let quickSort = (arr, left =0 , right = arr.length -1)=>{
    if(left< right){
        let pivotIndex = pivot(arr, left, right)
        //left
          quickSort(arr, left, pivotIndex-1)
        //right
        quickSort(arr, pivotIndex+1, right)
    }
   return arr
}
//console.log(quickSort([84, 644, 62, 100, 61, 20, 19, 700]))



//Another way(easy way)
let quickSort2 = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(left, right);
  return [...quickSort2(left), pivot, ...quickSort2(right)];
};
let unsortedArray = [84, 644, 62, 100, 61, 62, 20, 19, 700];
let sortedArray = quickSort2(unsortedArray);
console.log(sortedArray);

