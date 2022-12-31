// 136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        res = nums[i] ^ res;
    }
    return res;
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber( [1]));