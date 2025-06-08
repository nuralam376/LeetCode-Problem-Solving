// 9. Palindrome Number


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let rev = 0;
    let xCopy = x;
    x = Math.abs(x);

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    return rev === xCopy;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));