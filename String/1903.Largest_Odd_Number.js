// 1903. Largest Odd Number in String
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  let n = num.length - 1;
  while(n >= 0) {
    if(num[n] % 2 === 1) {
        return num.substring(0, n + 1);
    }
    n--;
  }
  return "";
};

console.log(largestOddNumber("52"));