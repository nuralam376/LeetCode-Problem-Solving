// 58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    while(n >= 0 && s[n] === " ") n--;

    let count = 0;

    while(n >= 0 && s[n] !== " ") {
        count++;
        n--;
    }
    return count;
};

var lengthOfLastWord3 = function(s) {
   let trimmedSplitWord =  s.trim().split(" ");
   return trimmedSplitWord[trimmedSplitWord.length - 1].length;
};

var lengthOfLastWord2 = function(s) {
    let n = s.length - 1;
    let count = 0;

    while(n >= 0) {
        if(s[n] !== " ") {
            count++;
        } else if(count > 0) {
            break;
        }
        n--;
    }
    return count;
};




console.log(lengthOfLastWord2("   fly me   to   the moon  "));