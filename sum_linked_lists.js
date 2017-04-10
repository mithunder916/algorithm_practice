// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// digits have to carry over

// not necessary to set pointer up as the parent list of l3 - could refactor
var addTwoNumbers = function(l1, l2) {
    let pointer = new ListNode(0)
    let l3 = new ListNode(0);
    pointer.next = l3;
    let carryOver = 0, firstTime = true;

    while (l1 !== null || l2 !== null){
        if (l1 === null) l1 = new ListNode(0);
        else if (l2 === null) l2 = new ListNode(0);
        let newSum = l1.val + l2.val;
        if (firstTime) {
            pointer.next.val = newSum % 10;
            firstTime = false;
        } else {
            pointer.next = new ListNode((newSum + carryOver) % 10);
        }
        if (newSum + carryOver > 9) carryOver = 1;
        else carryOver = 0;
        pointer = pointer.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    // if there is still a carry over value left, make a last node
    if (carryOver) pointer.next = new ListNode(carryOver)
    return l3;
};

// You are given two non-empty singly-linked lists representing two non-negative integers.
// Think of each linked list as containing one complete number, with a digit stored at each node.
// The digits are stored in reverse-order, meaning that the first node represents the ones place, the second represents the tens, and so on.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zeros.


// Input: l1(2 -> 4 -> 3), l2(5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Why? because 342 + 465 = 807

// Interviewers should be given this starting code defining singly-linked lists
function ListNode(val) {
    this.val = val;
    this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let carryOver = 0,
        pointer = l3;

    while (l1 !== null || l2 !== null){
      // if either list is out of nodes, set the variable to empty node, which will just add 0
        if (l1 === null) l1 = new ListNode(0);
        else if (l2 === null) l2 = new ListNode(0);

        let newSum = l1.val + l2.val;
        // important to use a pointer to reference l3.next; allows to do this in a loop without overwriting original value
        pointer.next = new ListNode((newSum + carryOver) % 10);
        // if the sum of the two digits plus the carryOver exceed 9, the carryOver should be 1
        if (newSum + carryOver > 9) carryOver = 1;
        else carryOver = 0;
        // set pointer to refer to the node we just defined
        pointer = pointer.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    // if there is still a carry over value left, make a final node with a value of 1
    if (carryOver) pointer.next = new ListNode(carryOver)
    // the first node contains an extra 0, so return the linked list starting at the next node
    return l3.next;
};
