// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums = nums.sort((a,b) => a - b);

    if(nums[0] !== 0) return 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1] + 1) {
            return nums[i - 1] + 1;
        }
    }
    return nums.length;
};

var missingNumber2 = function (nums) {
   let n = nums.length;
   let total = n * (n + 1) / 2;
   let sum = 0;

   for(let i = 0; i < n; i++) {
    sum += nums[i];
   }
   return total - sum;
};

console.log(missingNumber2([3,0,1]));
console.log(missingNumber2([0,1]));
console.log(missingNumber2([9,6,4,2,3,5,7,0,1]));