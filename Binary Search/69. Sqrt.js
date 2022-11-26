// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let low = 0;
    let high = x;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(mid * mid > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return high;
};

console.log(mySqrt(9));