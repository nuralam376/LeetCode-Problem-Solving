// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const replacedString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    let flag = true;
    let start = 0;
    let end = replacedString.length - 1;

    while(start <= end) {
        if(replacedString[start] !== replacedString[end]) {
            flag = false;
            break;
        }
        start++;
        end--;
    }
    return flag;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("ab_a"));