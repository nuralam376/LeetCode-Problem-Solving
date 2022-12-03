// 658. Find K Closest Elements

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
    let mid;

    while(left < right) {
        mid = Math.floor((left + right) / 2);

        if(x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr.slice(left, left + k);
};

console.log(findClosestElements([1,2,3,4,5], 4, 3));
console.log(findClosestElements([1,2,3,4,5], 4, -1));