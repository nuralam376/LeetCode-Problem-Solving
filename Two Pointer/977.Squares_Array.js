// 977. Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const squareArray = [];

    while(left <= right) {
        if(nums[left] * nums[left] < nums[right] * nums[right]) {
            squareArray.unshift(nums[right] * nums[right]);
            right--;
        } else {
            squareArray.unshift(nums[left] * nums[left]);
            left++;
        }
    }

    return squareArray;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));