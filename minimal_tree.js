// From CtCI Chp 4.2
// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height


// root node is middle value
// recursively call function on split arrays on two sides of the midPoint
// if array is empty, return null
// return node after recursive calls

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function makeTreeFromArray(sortedArray){
  let midpt = Math.floor(sortedArray.length / 2);
  let currentNode = new Node(sortedArray[midpt]);

  if (sortedArray.length < 1){
    return null;
  }

  currentNode.left = makeTreeFromArray(sortedArray.slice(0, midpt));
  currentNode.right = makeTreeFromArray(sortedArray.slice(midpt+1));
  return currentNode;
}


// var array = [1,2,4,6,9,16,23,31,41]
// let midpt = Math.floor(array.length / 2)
// console.log(midpt, array[midpt])

// var array2 = [2,4,6,8,10,20]
// // length = 6, root = array2[3]
// var array3 = [2,4,6,8,10,14,20]
// // length = 7, root = array3[3]
// console.log(array3.slice(0,3), array3.slice(4))

// var arr4 = [1,3,5,7,9]

// call 1 (startIndex, endIndex, midPoint, nodeval)
// 0, 5, 2, 5
// call 2 left 0, 1, 0, 1
// call 3 left
// call 2 right
