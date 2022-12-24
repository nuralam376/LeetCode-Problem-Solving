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
    let listA = headA;
    let listB = headB;

    while(listA != listB) {
        listA = listA ? listA.next : headB;
        listB = listB ? listB?.next : headA;
    }

    return listA;
};