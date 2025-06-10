// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function(nums1, m, nums2, n) {
   for(let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
   }

   nums1.sort((a,b) => a- b);
   return nums1;
};

var merge2 = function(nums1, m, nums2, n) {
   let nums1copy = nums1.slice(0,m);
   let p1 = 0; 
   let p2 = 0;

   for(let i = 0; i < m + n; i++) {
    if(p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
        nums1[i] = nums1copy[p1];
        p1++;
    } else {
        nums1[i] = nums2[p2];
        p2++;
    }
   }
   return nums1;
};

var merge3 = function(nums1, m, nums2, n) {
   let p1 = m -1;
   let p2 = n - 1;

   for(let i = m + n - 1; i >= 0; i--) {
    if(p2 < 0) break;

    if(p1 >=0 && nums1[p1] > nums2[p2]) {
        nums1[i] = nums1[p1];
        p1--;
    } else {
        nums1[i] = nums2[p2];
        p2--;
    }
   }
   return nums1;
 };

console.log(merge3([1,2,3,0,0,0], 3,[2,5,6],3));
console.log(merge3([1], 1,[],0));
console.log(merge3([], 0,[1],1));