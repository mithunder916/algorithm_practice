// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.
function ListNode(val) {
     this.val = val;
     this.next = null;
}

// my first solution: clunky
// ideas: counter to track 'indices' of each node; when iterating during the removal part of the function, I had to compensate by subtracting 1 from all indices

var deleteDuplicates = function(head) {
    let dupPointer = head, currentVal, counter = 0, dupIndices = [];

    // stores 'indices' (head is 0) of any duplicate nodes; key = val, value = array of indices
    while (dupPointer){
        if (currentVal === dupPointer.val) {
            dupIndices.push(counter);
        }
        counter++;
        currentVal = dupPointer.val;
        dupPointer = dupPointer.next;
    }

    // overwrites next nodes at each store index, then removes them from the array; finally, subtracts all indices by 1 to compensate for the linked list having one fewer node
    while (dupIndices.length > 0){
        let nodePointer = head;
        // endpoint is dupIndices - 1 because we want to stop at the node PRECEDING the node we want to overwrite
        for (let i=0; i < dupIndices[0]-1; i++){
            nodePointer = nodePointer.next
        }
        nodePointer.next = nodePointer.next.next;
        dupIndices.shift();
        dupIndices = dupIndices.map(index => {
            return index - 1;
        })
    }

    return head;
};

// paopao solution 1: SO MUCH BETTER
var deleteDuplicates = function(head) {
    var node = head;

    while (node && node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }

    return head;
};

// recursive solution - still don't get it
public ListNode removeElements(ListNode head, int val) {
    if(head == null) return null;
    ListNode next = removeElements(head.next, val);
    if(head.val == val) return next;
    head.next = next;
    return head;
}
