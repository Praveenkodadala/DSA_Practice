//Merge sort

/**
 * In merge sort, the idea of the algorithm is to sort smaller arrays and then combine those arrays together (merge them) in sorted order.
 * Merge sort leverages something called recursion, |
 * In pseudocode:
• Sort the left half of the array (assuming n > 1)
• Sort the right half of the array (assuming n > 1)
• Merge the two halves together
 */

//divide conquer
//divide left half and right half
//compare them and merge
//like until they split into single element of an array
//and then merge down to up
//worst case o(nlogn)
//best case omega(nlogn)

//1st write a function to merge two arrays
//2nd in recurion function use merge function

let merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    console.log(arr1[i], arr2[j]);
    if (arr2[j] >= arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    console.log("end loop");
    console.log("i", i);
    console.log("j", j);
  }
  while (i < arr1.length) {
    //push remaining elements of arr1
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    //push remaining elements of arr2
    result.push(arr2[j]);
    j++;
  }
  console.log(result);
  return result;
};

//merge([1, 10, 50], [2, 14, 99, 100]);

let mergeSort = (a) => {
  if (a.length <= 1) return a;
  let mid = Math.floor(a.length / 2);
  console.log("mid", mid);
  let left = mergeSort(a.slice(0, mid));
  let right = mergeSort(a.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
