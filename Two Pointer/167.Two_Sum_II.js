// 167. Two Sum II - Input Array Is Sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        let currentSum = numbers[left] + numbers[right];
        if(currentSum > target) {
            right = right - 1;
        } else if(currentSum < target){
            left = left + 1;
        } else {
         return [left + 1, right + 1];   
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));