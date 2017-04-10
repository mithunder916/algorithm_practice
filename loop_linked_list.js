// checks if a linked list has a loop in it

function loopCheck(head){
  let slow = head,
      fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next.next || null;
    if (slow === fast) return true;
  }
  return false;
}
