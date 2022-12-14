// 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    if(!height) return 0;

    let left = 0;
    let right = height.length - 1;
    let res = 0;
    let leftMax = height[left];
    let rightMax = height[right];

    while(left < right) {
        if(leftMax < rightMax) {
            left += 1;
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left];
        } else {
            right -= 1;
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
        }
    }

    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));