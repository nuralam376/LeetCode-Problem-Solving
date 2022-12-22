// 141. Linked List Cycle
class ListNode {
    constructor(val, next) {
        this.val = val || 0;
        this.next = next || null;
    }
}

class LinkedList {
    constructor(val) {
        const newNode = new ListNode(val);
        this.head = this.tail = newNode;
    }

    append(val) {
        const newNode = new ListNode(val);
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
 * @return {boolean}
 */
const hasCycle = function(head) {
    let slow = fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }
    return false;
};

const list = new LinkedList(3);
list.append(2);
list.append(0);
list.append(-4);
list.printList(list.head);

console.log(hasCycle(list.head));