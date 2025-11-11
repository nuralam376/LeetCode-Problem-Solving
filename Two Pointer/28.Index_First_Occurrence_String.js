// 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for(let i = 0; i <= n - m; i++) {
        let j = 0;
        for(j = 0; j < m; j++) {
            if(haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if(j === m) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad","sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("a", "a"));