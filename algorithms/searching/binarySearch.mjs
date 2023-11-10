/**
 * Binary Search
 * In binary search, the idea of the algorithm is to divide and conquer, 
   reducing the search area by half each time, trying to find a target number.
 * In order to leverage this power however, our array must first be sorted, 
   else we cannot make assumptions about the array's contents.
 * In pseudocode :
   • Repeat until the (sub)array is of size 0:
   • Calculate the middle point of the current (sub)array.
   • If the target is at the middle, stop.
   • Otherwise, if the target is less than what's at the middle, repeat, 
     changing the end point to be just to the left of the middle.
   • Otherwise, if the target is greater than what's at the middle,
     repeat, changing the start point to be just to the right of the middle.
 * worst case o(logn)  -- order of o(logn)
 * best case omega(1)
 */

let a = [10, 20, 30, 100, 300, 700, 800, 900, 1000, 2000];
let target = 100;
let binarySearch = (a, target)=>{
    let start = 0;
    let end = a.length - 1;
    let middle = Math.floor((start + end) / 2);
    console.log(start, end, middle);
    while (a[middle] !== target && start <= end) {  //start and end should not cross oover 
      if (target < a[middle]  ) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    if(a[middle] == target){
        return middle
    }else{
        return -1
    }
}

console.log(binarySearch(a, target))