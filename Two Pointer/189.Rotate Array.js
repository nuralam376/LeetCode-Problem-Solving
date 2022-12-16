// 189. Rotate Array

const reverse = (left, right, nums) => {
    while(left <= right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    const numsLength = nums.length;
    k = k % numsLength;
    reverse(0, numsLength - 1, nums);
    reverse(0, k - 1, nums);
    reverse(k, numsLength - 1, nums);

};

let nums = [1,2,3,4,5,6,7];
let nums2 = [-1,-100,3,99];
let nums3 = [-1];

rotate(nums, 3);
rotate(nums2,2);
rotate(nums3, 2);

console.log(nums);
console.log(nums2);
console.log(nums3);
