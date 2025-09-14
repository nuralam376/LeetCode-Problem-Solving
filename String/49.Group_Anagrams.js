// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for(let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("");

        if(!map[sortedStr]) {
            map[sortedStr] = [strs[i]];
        } else {
            map[sortedStr].push(strs[i]);
        }
    }

    return Object.values(map);
};

var groupAnagrams2 = function(strs) {
   let map = {};

   for(let i = 0; i < strs.length; i++) {
        let freqArray = Array(26).fill(0);
        let s = strs[i];


        for(let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
            freqArray[index]++;
        }

        let key = "";

        for(let k = 0; k < 26; k++) {
            key += "#" + freqArray[k];
        }


        if(!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
   }

   return Object.values(map);
};