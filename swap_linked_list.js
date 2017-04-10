function swap (node, i, j) {
  [i, j] = [Math.min(i, j), Math.max(i, j)];
  for (var k = 0, current = node; k <= j; k++, current = current.next) {
    if (k === i - 1) {
      var p1 = current;
    }
    if (k === j - 1) {
      var p2 = current;
    }
  }
  [p1.next, p2.next] = [p2.next, p1.next];
  [p1.next.next, p2.next.next] = [p2.next.next, p1.next.next];
}



var list = { val: 1, next: { val: 2, next: {val: 3, next: { val: 4, next: null}}}};
swap(list, 1, 3)

console.log(list)
