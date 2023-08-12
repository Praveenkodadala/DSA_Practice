//Recursion
//recursion always need to have base case(ending condition- end point )
// different input each time
/**
 * We might describe an implementation of an algorithm as being particularly "elegant" 
  if it solves a problem in a way that is both interesting and easy to visualize
 * The technique of recursion is a very common way to implement such an "elegant" solution.
 * The definition of a recursive function is one that, as part of its execution, invokes itself.
 */

// ******************************countDown********************************//
/*
let countDown = (num)=>{
    //using loops
    for(let i=num; i>0; i--){
       console.log(i)
    }
}
 countDown(10)
*/
/*
let countDown = (num)=>{
    //using recursion
    if(num<=0){
       console.log('all done')
       return
    }
    console.log(num)
    num--
    countDown(num)

}
countDown(10)
*/

//******************************8*****factorical of numbers**********************************//
/*
let factoricalOfNum = (num) => {
  //using loops
  if (num == 0 || num == 1) {
    return 1;
  }
  let total = 1;
  while (num > 0) {
    total = total * num;
    num--;
  }
  return total;
};
console.log(factoricalOfNum(0))
*/
/*
let factoricalOfNum = (num)=>{
    //using recursively
    if(num ==0 || num ==1){
        return 1
    }
    let result = num*factoricalOfNum(num-1)
    return result
}
console.log(factoricalOfNum(10))
*/

//********************************************************sum range *****************************************//
// let num =100
// let total = num*(num+1)/2
/*
let sumRange = (num)=>{
    //using loops
    let total =0
    while(num>0){
       total = total+num
       num--
    }
    return total
}
console.log(sumRange(100))
*/
/*
let sumRange = (num)=>{
    //using recursive
    if( num ==1){
        return 1
    }
    let total = num+sumRange(num-1)
     return total
}
console.log(sumRange(10))
*/