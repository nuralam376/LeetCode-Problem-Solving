// 58. Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    return s.trim().split(" ").slice(-1).join("").length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));