// 125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let string = s.toLowerCase();
  let filteredString = "";
  let reverseString = "";
  for(let i = 0; i < string.length; i++) {
    if((string[i].charCodeAt() >= "a".charCodeAt() && string[i].charCodeAt() <= "z".charCodeAt()) || (string[i].charCodeAt() >= "0".charCodeAt() && string[i].charCodeAt() <= "9".charCodeAt())) {
        filteredString = filteredString + string[i];
        reverseString = string[i] + reverseString;
    }
  }


  return filteredString === reverseString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));