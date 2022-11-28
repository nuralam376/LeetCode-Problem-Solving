// 367. Valid Perfect Square

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    let mid;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(mid * mid < num) {
            left = mid + 1;
        } else if(mid * mid > num) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));