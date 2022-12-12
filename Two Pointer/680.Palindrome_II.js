// 680. Valid Palindrome II
/**
 * @param {string} s
 * @return {boolean}
 */

const validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            let skipLeft = s.slice(left + 1, right + 1);
            let skipRight = s.slice(left, right);
            console.log(skipLeft, skipLeft.split("").reverse().join(""));
            return skipLeft === skipLeft.split("").reverse().join("") || skipRight === skipRight.split("").reverse().join("");
        }
        left = left + 1;
        right = right - 1;
    }
    return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("deeee"));