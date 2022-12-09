"use strict";
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
class LinkedList {
    constructor(value) {
        const newNode = new ListNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.val);
            currentNode = currentNode.next;
        }
        return array;
    }
}
function mergeTwoLists(list1, list2) {
    const newList = new ListNode();
    let tail = newList;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if (list1) {
        tail.next = list1;
    }
    else if (list2) {
        tail.next = list2;
    }
    return newList.next;
}
;
const listNode1 = new LinkedList(1);
listNode1.append(2);
listNode1.append(4);
const listNode2 = new LinkedList(1);
listNode2.append(3);
listNode2.append(4);
listNode1.append(5);
console.log(listNode1.printList());
console.log(listNode2.printList());
const newList = mergeTwoLists(listNode1, listNode2);

let currentNode = newList.head;
while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}
