/**
 *  In bubble sort, the idea of the algorithm is to move higher valued elements generally towards the right and lower value elements generally towards the left.
 * in pseudocode:
• Set swap counter to a non-zero value
• Repeat until the swap counter is 0:
Reset swap counter to 0
• Look at each adjacent pair
If two adjacent elements are not in order, swap them and add one to the swap
counter
 * 
 */

let a = [700, 800, 20, 30, 900, 1000, 2000, 10, 100, 300];

let bubbleSort = (a)=>{
    for(let i=0 ; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            if(a[j]>a[j+1]){
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
    }
return a
}
console.log(bubbleSort(a))