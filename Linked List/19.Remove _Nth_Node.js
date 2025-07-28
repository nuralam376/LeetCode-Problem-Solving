// 19. Remove Nth Node From End of List
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    } 
}

class LinkedList {
    constructor(value) {
        const newNode = new ListNode(value);
        this.head = newNode;
        this.tail = newNode;
    }

    append(value) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    printList(head) {
        let current = head;

        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let sentinel = new ListNode(0 ,head);
  let first = sentinel;

  for(let i = 0; i < n; i++) {
    first = first.next;
  }

  let second = sentinel;

  while(first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return sentinel.next;
}; 

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList(list.head);
const newList = removeNthFromEnd(list.head, 2);
list.printList(newList);