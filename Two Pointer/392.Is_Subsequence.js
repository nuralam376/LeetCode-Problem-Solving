// 392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let s_pointer = 0;
    let t_pointer = 0;

    if(s.length === 0) return true;

    while(t_pointer <= t.length) {
        if(t.charAt(t_pointer) === s.charAt(s_pointer)) {
            s_pointer++;

            if(s_pointer === s.length) {
                return true;
            }
        }
        t_pointer++;
    }
    return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc"));