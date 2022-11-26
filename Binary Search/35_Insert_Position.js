// 35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
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
    return start;
};  

console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));