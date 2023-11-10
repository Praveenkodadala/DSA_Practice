/**
 * linear search 
 * In linear search, the idea of the algorithm is to iterate across the array from left to right,
  searching for a specified element.
 * In pseudocode:
  • Repeat, starting at the first element:
  • If the first element is what you're looking for (the target), stop. . Otherwise, move to the next element.
 * worst case o(n)  -- order of(n)
 * best case omega(1)
 */

/**
 * 
 * @param {*} array 
 * @param {*} target 
 * @returns position of target
 */

let linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    i;
    if (array[i] == target) {
      return `Element found at position ${i}`;
    }
  }
  return -1;
};


/*
//using while loop
let linearSearch = (array, target)=>{
    let i = 0
    while(i<array.length){
        if(array[i] == target){
            return `Element found at  ${i}`
        }
        i++
    }
    return -1
}
*/


console.log(linearSearch([4, 3, 9, 5, 7, 6, 2], 2));


