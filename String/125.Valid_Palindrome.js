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

var isPalindrome2 = function(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while(i < j) {
    if(!s[i].match(/[a-z0-9]/i))  {
      i++;
    } else if(!s[j].match(/[a-z0-9]/i)) {
      j--;
    } else if(s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("race a car"));