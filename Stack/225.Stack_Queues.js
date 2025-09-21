// 225. Implement Stack using Queues

var MyStack = function() {
  this.q1 = [];
  this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;

    for(let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }
    let ans = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return ans;
   
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;

    for(let i = 0; i < n - 1; i++) {
        this.q2.push(this.q1.shift());
    }

    let front = this.q1?.[0];
    this.q2.push(this.q1.shift());
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return front;

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q1.length === 0;  
};

var obj = new MyStack()
obj.push(5)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
 