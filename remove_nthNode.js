
// 1. find nth node
// 2. set previous node.next to n.next
var removeNthFromEnd = function(head, n) {
    console.log(head, n)
    let length = 0, pointer = head;
    while (pointer !== null){
        length++;
        pointer = pointer.next;
    }
    let prevPointer = head, nodePointer;
    if (n === length) return head.next

    n = length - n;
    for (let i = 0; i < n-1; i++){
        prevPointer = prevPointer.next;
        // prevPointer now refers to our node one before n
    }
        nodePointer = prevPointer.next;
        prevPointer.next = nodePointer.next;
        return head;
};

// To do this in one pass, you can use two pointers, a slow and fast one.
// The idea is that if a fast pointer moves 2 nodes per step while the slow pointer moves 1 node per step, the slow pointer will be at the middle when the fast pointer is at the end


// JS solution from paopao2
// Basic idea: n is the numbers of nodes moving backwards from the end;
// so if we move ahead n places with pointer 1 before we start to move pointer 2, then pointer 2 will end up at the node right before the node we want to delete
var removeNthFromEnd = function(head, n) {
    var nodeA = head,
        nodeB = head,
        i = 0;

    if (!head) {
        return null;
    }
    // first pointer (nodeA) steps through entire LL; once it has moved n steps, nodeB starts moving ahead as well
    while (nodeA.next) {
        nodeA = nodeA.next;
        if (i < n) {
            i++;
        } else {
            nodeB = nodeB.next;
        }
    }

    // deals with edge case of n=1 and only one node
    if (i < n) {
        head = head.next;
        return head;
    }

    // overwrites reference to nth node with node at n+1
    if (nodeB.next) {
        nodeB.next = nodeB.next.next;
        return head;
    }

    return null;

};
