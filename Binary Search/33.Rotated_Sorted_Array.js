// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);

        if(target === nums[mid]) {
            return mid;
        }
        else if(nums[left] <= nums[mid]) {
            if(target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if(target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));