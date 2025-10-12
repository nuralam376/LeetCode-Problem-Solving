// 1021. Remove Outermost Parentheses

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let stack = [];
  let ans = "";
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
        stack.push(s[i]);
        ans += stack.length > 1 ? s[i] : "";
    } else {
        ans += stack.length > 1 ? s[i] : "";
        stack.pop();
    }
  }

  return ans;
};

var removeOuterParentheses2 = function(s) {
  let level = -1;
  let ans = "";


  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      ++level;
      ans += (level ? s[i] : "");
    } else {
      ans += (level ? s[i] : "")
      --level;
    }
  }

  return ans;
};

console.log(removeOuterParentheses2("(()())(())"));
console.log(removeOuterParentheses2("(()())(())(()(()))"));
console.log(removeOuterParentheses2("()()"));