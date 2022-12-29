// 682. Baseball Game
/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function(operations) {
    let stack = [];
    for(let ops of operations) {
        if(ops === "+") {
            stack.push(+stack[stack.length -1] + +stack[stack.length -2]);
        } else if(ops === "D") {
            stack.push(2 * +stack[stack.length - 1]);
        } else if(ops === "C") {
            stack.pop();
        } else {
            stack.push(+ops);
        }
    }
    return stack.reduce((sum, num) => sum + +num, 0);
};

console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1","C"]));