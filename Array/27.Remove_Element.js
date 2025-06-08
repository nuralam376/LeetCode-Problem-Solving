// 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let x = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
};