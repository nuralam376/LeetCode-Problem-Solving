// 557. Reverse Words in a String III

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let splitedWords = s.split(" ");
    let reversedWords = "";
    for(word of splitedWords) {
        reversedWords += word.split("").reverse().join("") + " ";
    }
    return reversedWords.trim();
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));