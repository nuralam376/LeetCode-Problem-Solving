// 141. Linked List Cycle
class ListNode {
    constructor(val, next) {
        this.val = val || 0;
        this.next = next || null;
    }
}

class LinkedList {
    // constructor(val) {
    //     const newNode = new ListNode(val);
    //     newNode.next = this.head;
    //     this.head = newNode;
    // }

    append(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
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
    // let seenNodes = new Set();
    // let curr = head;

    // while(curr) {
    //     if(seenNodes.has(curr)) {
    //         return true;
    //     } 
    //     seenNodes.add(curr);
    //     curr = curr.next;
    // }
    // return false;
    if(!head) return false;
    let slow = head;
    let fast = head.next;


    while(slow != fast) {
        if(!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next
    }

    return true;
};

const list = new LinkedList();
list.append(20);
list.append(4);
list.append(15);
list.append(10);
list.printList(list.head);

console.log(hasCycle(list.head));