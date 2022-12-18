// 203. Remove Linked List Elements


//  Definition for singly-linked list.
 class ListNode {
    constructor(val, next){
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

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
  }
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    let dummyNode = new ListNode();
    dummyNode.next = head;
    let previous = dummyNode;
    let current = head;

    while(current) {
        let next = current.next;

        if(current.val === val) {
            previous.next = next;
        } else {
            previous = current;
        }

        current = next;
    }   
    return dummyNode.next;
};

const list = new LinkedList(1);
list.append(2);
list.append(6);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.printList(list.head);
const newList = removeElements(list.head, 6);
list.printList(newList);