// 1768. Merge Strings Alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let mergeString = "";

    for(let i = 0, j = 0; i < word1.length || j < word2.length;i++,j++) {
        if(i < word1.length) {
            mergeString += word1[i];
        }
        if(j < word2.length) {
            mergeString += word2[i];
        }
    }

    return mergeString;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));