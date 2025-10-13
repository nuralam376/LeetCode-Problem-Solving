// 150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    let map = {
        "+" : (a,b) => (b + a),
        "-": (a,b) => (b - a),
        "*": (a,b) => (b * a),
        "/" : (a,b) => Math.trunc(b / a) 
    };


    for(let i = 0; i < tokens.length; i++) {
        if(map[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[tokens[i]](+a, +b);
            stack.push(ans);
        } else {
            stack.push(tokens[i]);
        }
    }

    return Number(stack.pop());
};

console.log(evalRPN("4"));
console.log(evalRPN(["2","1","+","3","*"]));