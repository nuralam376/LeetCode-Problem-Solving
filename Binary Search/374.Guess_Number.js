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
   let l = 1;
   let r = n;

   while(l <= r) {
    let m = l + Math.floor((r- l ) / 2);
    let res = guess(m);

    if(res === 0) {
        return m;
    } else if(res < 0) {
        r = m - 1;
    } else {
        l = m + 1;
    }
   }
};

console.log(guessNumber(10));
console.log(guessNumber(1));
console.log(guessNumber(2));