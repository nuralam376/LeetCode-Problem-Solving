// 234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  let curr = head;
  let arr = [];

  while(curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    if(arr[left++] !== arr[right--]) return false;
  }
  return true;
};

const isPalindrome2 = function(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }


  let prev = null;
  while(slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }


  let first = head;
  let second = prev;

  while(second) {
    if(first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }

  return true;
};