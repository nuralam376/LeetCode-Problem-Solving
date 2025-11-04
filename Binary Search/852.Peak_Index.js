// 852. Peak Index in a Mountain Array

/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length - 1;

    while(l < r) {
        let m = l + Math.floor((r - l) /2);

        if(arr[m+1] > arr[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,10,5,2]));