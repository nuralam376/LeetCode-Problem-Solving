// 206. Reverse Linked List
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class LinkedList {
    constructor(value) {
        const node = new ListNode(value);
        this.head = node;
        this.tail = node;
    }

    append(value) {
        const node = new ListNode(value);
        this.tail.next = node;
        this.tail = node;
    }

    printList(head) {
        let data = head;

        while(data) {
            console.log(data.val);
            data = data.next;
        }
    }

    reverseList(head) {
        let current = head;
        let previous = null;

        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let previous = null;

    while(current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList(list.head);
const reversedList = reverseList(list.head);
list.printList(reversedList);