// 509. Fibonacci Number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
    return fib(n - 1) + fib(n-2);
};


console.log(fib(2));
console.log(fib(3));
console.log(fib(4));