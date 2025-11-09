// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsLength = nums.length;
    let mapToFindPair = {};

    for(let i = 0; i < numsLength; i++) {
        mapToFindPair[nums[i]] = i;
    }

    for(let  i = 0; i < numsLength; i++) {
        let pairToFind =  target - nums[i];

        if(mapToFindPair[pairToFind] && mapToFindPair[pairToFind] !== i) {
            return [i, mapToFindPair[pairToFind]];
        }
    }
    return [0,0];
};


console.log(twoSum([2,7,11,15], 9));