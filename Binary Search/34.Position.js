// 34. Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);
    console.log(left, right);

    return [left, right];
};

const binarySearch = (nums, target, leftSearch) => {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    let index = -1;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);

        if(nums[mid] < target) {
            left = mid + 1;
        } else if(nums[mid] > target) {
            right = mid - 1;
        } else {
            index = mid;
            if(leftSearch) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return index;
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([], 0));