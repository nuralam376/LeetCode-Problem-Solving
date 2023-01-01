// 225. Implement Stack using Queues
class MyStack {
    constructor() {
        this.queue = [];
    }   
    push(x) {
        this.queue.push(x);
    }
    pop() {
        let last = this.queue.length - 1;

        for(let i = 0; i < last; i++) {
            let k = this.queue.shift();
            this.queue.push(k);
        }
        return this.queue.shift();
    }
    top() {
        return this.queue[this.queue.length - 1];
    }
    empty() {
        return this.queue.length === 0;
    }
}

// Your MyStack object will be instantiated and called as such:
const obj = new MyStack()
obj.push(1)
const param_2 = obj.pop()
const param_3 = obj.top()
const param_4 = obj.empty()

console.log(param_2, param_3, param_4);
