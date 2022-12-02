// 410. Split Array Largest Sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((sum, num) => sum + num, 0);
    let mid, result;

    function canSplit(largest) {
        let subarray = 0;
        let currentSum = 0;
        
        for(let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            if(currentSum > largest) {
                subarray += 1;
                currentSum = nums[i];
            }
        }
      
        return subarray + 1 <= k;
    }

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
       
        if(canSplit(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
};

console.log(splitArray([7,2,5,10,8], 2));
console.log(splitArray([1,2,3,4,5], 2));