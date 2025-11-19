// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = j = 0;
    let map = {};
    let maxWs = 0;

    for(let j = 0; j < s.length; j++) {
        if(map[s[j]] !== undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        let currWs = j - i + 1;
        maxWs = Math.max(maxWs, currWs);
    }

    return maxWs;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));