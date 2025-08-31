// 771. Jewels and Stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  
  for(let i = 0; i < stones.length; i++) {
    for(let j = 0; j < jewels.length; j++) {
        if(jewels[j] === stones[i]) {
            ++count;
            break;
        }
    }
  }
  return count;
};

var numJewelsInStones2 = function(jewels, stones) {
   let jSet = new Set(jewels);
   let count = 0;

   for(let c of stones) {
    if(jSet.has(c)) count++;
   }
   return count;
};


console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("aA", "aAAbbbb"));