/**
 * Radix sort
 * sorting an array of integers based on their digits.
 * radix sort is special sorting algorithm that works on list of numbers
 * It never makes comparisons between two numbers(elements)
 * It exploits the fact that information about the size of a number is encoded in the number of digits.
 * More digits means a bigger number
 * what we do is we take a look at the right most digit and regroup then in those 10 buckets
 * we will check from right most digit to left digits (8374).. 1st 4 then 7 then 3 and then 8
 * and we regroup them back
 * --0, --1, --2, --3, --4, --5, --6, --7, --8, --9, --10, 
 * so the number of times we have to actually do this process depends on the largest number.how many digits it has
 * if we have a four digit number so we have to split them four times
 * PSEUDOCODE:
• Define a function that accepts list of numbers
• Figure out how many digits the largest number has
• Loop from k = 0 up to this largest number of digits
• For each iteration of the loop:
• Create buckets for each digit (0 to 9)
• place each number in the corresponding bucket based on its kth digit
• Replace our existing array with values in our buckets, starting with 0 and going up to 9
• return list at the end!
 * 
 */

//need to have helper functions getDigit(), digitCount() and mostDigits() before radix sort

/**
 *
 * @param {*} num
 * @param {*} place
 * @returns the digit in the num at the given place value
 */
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// console.log(getDigit(num, place))

/**
 *
 * @param {*} num
 * @returns the num of digits in num
 */
function digitCount(num) {
  if (num === 0) {
    return 1; // Special case for handling 0
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(num))
let nums = [12, 34, 645, 5]; // number of digit in largest number in list // 3  ->because 645 has 3 digits
/**
 *
 * @param {*} nums (array of numbers list)
 * @returns the number of digit in the largest numbers in the list
 */
function mostDigits(nums) {
  let maxDigitCount = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]));
  }
  return maxDigitCount;
}
mostDigits(nums);

let radixSort = (nums) => {
  //    console.log(mostDigits(nums))
  for (let k = 0; k < mostDigits(nums); k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      //   console.log( getDigit(nums[i], k))
      let digitIdx = getDigit(nums[i], k);
      digitBucket[digitIdx].push(nums[i]);
    }
    nums = digitBucket.flat();
  }
  return nums;
};

let unsortedArray = [1233, 45, 353245, 3];
let sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
