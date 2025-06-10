// 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let x = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for(let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));