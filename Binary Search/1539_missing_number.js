// 1539. Kth Missing Positive Number

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 const findKthPositive = function(arr, k) {
    let i = 0;
    let n = 1;
    let missingNumbers = [];

    while(missingNumbers.length < k) {
        if(n !== arr[i]) {
            missingNumbers.push(n);
        } else {
            i++;
        }
        n++;
    }
    return missingNumbers[k - 1];
    
};

console.log(findKthPositive([2,3,4,7,11, 12, 13, 14], 5));
console.log(findKthPositive([1,2,3,4], 2));