// 2. Add Two Numbers

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode();
    let current = dummyNode;

    let carry = 0;
    let v1, v2, val;

    while(l1 || l2 || carry) {
        v1 = l1?.val || 0;
        v2 = l2?.val || 0;

        val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        current.next = new ListNode(val);

        current = current.next;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    return dummyNode.next;
};

const l1 = new LinkedList(2);
l1.append(4);
l1.append(3);

const l2 = new LinkedList(5);
l2.append(6);
l2.append(4);
// l1.printList(l1.head);
// l2.printList(l2.head);
const newList = addTwoNumbers(l1.head,l2.head);
console.log(newList);
l1.printList(newList);