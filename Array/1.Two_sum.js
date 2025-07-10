// 1. Two sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const  twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length;j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

const twoSum2 = function(nums, target) {
    let n = nums.length;
    let map = {};

    for(let i = 0; i < n; i++) {
        map[nums[i]] = i;
    }


    for(let i = 0; i < n; i++) {
        let pairToFind = target - nums[i];

        if(map[pairToFind] && map[pairToFind] !== i) {
            return [i, map[pairToFind]];
        }
    }
};


console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
console.log(twoSum2([2,7,11,15],9));
console.log(twoSum2([3,2,4],6));
console.log(twoSum2([3,3],6));