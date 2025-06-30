// 912. Sort an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));
    return mergeArray(left, right);
};


const mergeArray = (left, right) => {
    let result = [], i = 0, j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
};


console.log(sortArray([5,2,3,1]));
console.log(sortArray([5,1,1,2,0,0]));