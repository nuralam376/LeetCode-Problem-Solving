// 852. Peak Index in a Mountain Array

/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while(low < high) {
        mid = Math.floor((low + high) / 2);

        if(arr[mid] > arr[mid + 1]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,10,5,2]));