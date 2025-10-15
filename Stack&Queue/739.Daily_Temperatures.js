// 739. Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let stack = [];
  let n = temperatures.length;
  let ans = Array(n).fill(0);


  stack.push(n-1);
  for(let i = n - 2; i >= 0; i--) {
    while(stack.length) {
        let top = stack[stack.length - 1];

        if(temperatures[i] >= temperatures[top]) {
            stack.pop();
        } else {
            ans[i] = top - i;
            break;
        }
    }
    stack.push(i);
  }

  return ans;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));