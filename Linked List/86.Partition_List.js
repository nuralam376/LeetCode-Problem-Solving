// 86. Partition List

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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
    let left = new ListNode();
    let right = new ListNode();
    let leftTail = left;
    let rightTail = right;
    let current = head;

    while(current) {
        if(current.val < x) {
            leftTail.next = current;
            leftTail = leftTail.next;
        } else {
            rightTail.next = current;
            rightTail = rightTail.next;
        }
        current = current.next;
    }
    leftTail.next = right.next;
    rightTail.next = null;
    return left.next;
};

const list = new LinkedList(1);
list.append(4);
list.append(3);
list.append(2);
list.append(5);
list.append(2);
// list.printList(list.head);
const newList = partition(list.head, 3);
list.printList(newList);