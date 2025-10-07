// 155. Min Stack


var MinStack = function() {
    this.s = [];
};
MinStack.prototype.push = function(val) {
    if(this.s.length === 0){
        this.s.push([val, val]);
    } else {
        let minVal = Math.min(val, this.s[this.s.length-1][1]);
        this.s.push([val, minVal]);
    }
};
MinStack.prototype.pop = function() {
    this.s.pop();
};
MinStack.prototype.top = function() {
    if(this.s.length > 0) {
        return this.s[this.s.length-1][0];
    }
    return this.s;
};
MinStack.prototype.getMin = function() {
    if(this.s.length > 0) {
        return this.s[this.s.length-1][1];
    }
};

 
  var obj = new MinStack()
  obj.push(5)
  obj.pop()
  var param_3 = obj.top()
  var param_4 = obj.getMin()