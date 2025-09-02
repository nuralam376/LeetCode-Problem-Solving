// 1221. Split a String in Balanced Strings

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let balancedCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            rCount++;
        } else {
            lCount++;
        }

        if(rCount === lCount) {
            balancedCount++;
            lCount = 0;
            rCount = 0;
        }
    }
    return balancedCount;
};

var balancedStringSplit2 = function(s) {
    let temp = 0;
    let balancedCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            temp++;
        } else {
            temp--;
        }

        if(temp === 0) {
            balancedCount++;
            temp = 0;
        }
    }
    return balancedCount;
};


console.log(balancedStringSplit2("RLRRLLRLRL"));