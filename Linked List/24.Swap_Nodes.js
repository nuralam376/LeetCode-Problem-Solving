// 24. Swap Nodes in Pairs

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
const swapPairs = function(head) {
    let dummyNode = new ListNode(0, head);
    let previous = dummyNode;
    let current = head;

    while(current && current.next) {
        let nextPair = current.next.next;
        let second = current.next;

        current.next = nextPair;
        second.next = current;
        previous.next = second;

        previous = current;
        current = nextPair;
    }

    return dummyNode.next;
};

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.printList(list.head);
const newList = swapPairs(list.head);
list.printList(newList);