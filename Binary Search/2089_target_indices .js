// Leetcode 2089. Find Target Indices After Sorting Array
 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = function(nums, target) {
    nums.sort((a,b) => a - b);

    let start = 0;
    let end = nums.length - 1;
    let mid;
    let loopCount = 0;

    // Finds the target number, breaks the loop if found
    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        console.log(nums[mid]);
        if(nums[mid] === target) {
            break;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        loopCount++;
    }
    
    console.log(mid);
   let targetIndices = [];

   // Finds duplicate target value on the left side of the sorted array
   for(let i = mid; i >= 0; i--) {
       console.log("i ", i);
    if(nums[i] === target) {
        targetIndices.push(i);
    } else {
        console.log("break ", i);
        break;
    }
    loopCount++;
   }
   
   // Finds duplicate target value on the right side of the sorted array
   for(let i = mid + 1; i < nums.length; i++) {
    if(nums[i] === target) {
        targetIndices.push(i);
    } else {
        break;
    }
    loopCount++;
   }

   return targetIndices.sort((a, b) => a - b);
};

const array = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];

// console.log(targetIndices([1,2,5,2,3], 2));
// console.log(targetIndices([1,2,5,2,3], 3));
// console.log(targetIndices([1,2,5,2,3], 5));
console.log(targetIndices(array, 100));