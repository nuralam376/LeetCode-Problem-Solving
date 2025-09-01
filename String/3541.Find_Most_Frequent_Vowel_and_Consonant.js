// 3541. Find Most Frequent Vowel and Consonant
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
  let map = {};
  
  for(let i = 0; i < s.length; i++) {
    map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
  }

  const vowels = ["a","e","i","o","u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  let objectKeys = Object.keys(map);
  for(let i = 0; i < objectKeys.length; i++) {
    if(vowels.includes(objectKeys[i])) {
        maxVowel = Math.max(maxVowel, map[objectKeys[i]]);
    } else {
        maxConsonant = Math.max(maxConsonant, map[objectKeys[i]]);
    }
  }

  return maxVowel + maxConsonant;
};

console.log(maxFreqSum("successes"));