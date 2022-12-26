// 61. Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
    if(!head) {
        return head;
    }

    let length = 1;
    let tail = head;

    while(tail.next) {
        length++;
        tail = tail.next;
    }
    
    k = k % length;
    
    if(k === 0) {
        return head;
    }

    let i = 0;
    let current = head;
    while(i < length - k - 1) {
        current = current.next;
        i++;
    }
    let newHead = current.next;
    current.next = null;
    tail.next = head;
    return newHead;
};

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList(list.head);
const newList = rotateRight(list.head, 2);
list.printList(newList);