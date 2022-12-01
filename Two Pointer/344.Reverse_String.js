// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    const stringLength = s.length;

    for(let i = 0, j = stringLength - 1; i < stringLength; i++, j--) {
        if(i >= j) {
            break;
        }
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));