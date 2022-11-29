// 374. Guess Number Higher or Lower

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * 
 */
const guess = function(num) {
    const pick = 1;
    if(num > pick) {
        return -1;
    } else if(num < pick) {
        return 1;
    }
    return 0;
}

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    let low = 1;
    let high = n;
    let mid;

    while(low <= high) {
        mid = Math.floor((low + high) / 2);
        const number = guess(mid);
        if(number === 0) {
            return mid;
        } else if(number === 1) {
            low = mid + 1;
        } else if(number === -1) {
            high = mid - 1;
        }
    }
    return high;
};

console.log(guessNumber(10));
console.log(guessNumber(1));
console.log(guessNumber(2));