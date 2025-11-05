// 540. Single Element in a Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  
  while(l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if(nums[m] === nums[m-1]) {
        let leftCount = m - 1 - l;

        if(leftCount % 2 === 1) {
            r = m - 2;
        } else {
            l = m + 1
        }
    }
    else if(nums[m] === nums[m + 1]) {
        let leftCount = m - l;

        if(leftCount % 2 === 1) {
            r = m - 1;
        } else {
            l = m + 2;
        }
    } else {
        return nums[m];
    }
 }

 return nums[l];
};


console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));