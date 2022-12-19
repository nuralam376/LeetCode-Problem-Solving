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
    let dummyNode = new ListNode(0, head);
    let left = dummyNode;
    let right = head;

    while(n > 0 && right) {
        right = right.next;
        n--;
    }

    while(right) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;
    return dummyNode.next;
};

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList(list.head);
const newList = removeNthFromEnd(list.head, 2);
list.printList(newList);