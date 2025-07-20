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
   let sentinel = new LinkedList(0, head);
   let current = sentinel;

   while(current && current.next) {
    if(current.next.val === val) {
        current.next = current.next.next;
    }
    else {
        current = current.next;
    }
   } 

   return sentinel.next;
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