
// 876. Middle of the Linked List


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;


    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}; 