// 160. Intersection of Two Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
   let pA = headA;
   let pB = headB;

   while(pA !== pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
   }
   return pA;
};
