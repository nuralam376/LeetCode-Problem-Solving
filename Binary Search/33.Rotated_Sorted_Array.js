// 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while(l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if(target === nums[m]) {
        return m;
    }

    if(nums[l] <= nums[m]) {
        if(target >= nums[l] && target < nums[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    } else {
        if(target > nums[m] && target <= nums[r]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 1));
console.log(search([5,1,3],5));