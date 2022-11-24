// Leetcode Problem - 704. Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let array = nums.sort();
    console.log(array);
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

let nums = [-1,0,3,5,9,12], target = 9;
nums = [-1,0,3,5,9,12], target = 2;
console.log(search(nums, target));
console.log(search([48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38], 6));