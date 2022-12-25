// 83. Remove Duplicates from Sorted List

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
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    let current = head;

    while(current) {
        while(current.next && current.val == current.next.val) {
            current.next = current.next.next;
        }
        current = current.next;
    }

    return head;
};

const list = new LinkedList(1);
list.append(1);
list.append(2);
list.printList(list.head);
const newList = deleteDuplicates(list.head);
list.printList(newList);