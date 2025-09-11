// 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapSToT = {};
    let mapTToS = {};

    for(let i = 0; i < s.length; i++) {
        if(!mapSToT[s[i]] && !mapTToS[t[i]]) {
            mapSToT[s[i]] = t[i];
            mapTToS[t[i]] = s[i];
        } else if(mapSToT[s[i]] !== t[i] || mapTToS[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic("egg", "add"));