// 239. Sliding Window Maximum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let q = [];
    let i = j = 0;

    while(j < nums.length) {
        while(q.length && nums[j] > q[q.length - 1]) {
            q.pop();
        }
        q.push(nums[j]);

        if(j >= k -1) {
            res.push(q[0]);
            if(nums[i] === q[0]) {
                q.shift();
            }
            i++;
        }
        j++;
    }

    return res;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1],1));