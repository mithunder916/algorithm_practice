'use strict';
/* eslint-disable no-use-before-define */

const split = array => {
  let middle = Math.floor(array.length / 2);
  return [array.slice(0, middle), array.slice(middle)];
}

const merge = (left, right) => {
  let leftIdx = 0, rightIdx = 0, mergedArray = [];
  while (leftIdx < left.length - 1 && rightIdx < right.length - 1){
    if (left[leftIdx] <= right[rightIdx]) {
      mergedArray.push(left[leftIdx])
      leftIdx++;
    } else {
      mergedArray.push(right[rightIdx])
      rightIdx++;
    }
  }
  for (let i = leftIdx; i < left.length; i++){
    mergedArray.push(left[i])
  }
  for (let j = rightIdx; j < right.length; j++){
    mergedArray.push(right[j])
  }
  return mergedArray;
}

const mergeSort = array => {
  //base case
  if (array.length < 2) return array;
  
  let splitArray = split(array);
  let left = splitArray[0], right = splitArray[1];
  return merge(mergeSort(left), mergeSort(right))
}



































// const mergeSort = function (array) {
//   if (array.length < 2) return array; // base case
//   const splits = split(array),
//         left = splits[0],
//         right = splits[1];
//   return merge(mergeSort(left), mergeSort(right)); // merge sorted!
// };

// const split = function (array) {
//   const center = array.length / 2,
//         left = array.slice(0, center),
//         right = array.slice(center);
//   return [left, right];
// };

// const merge = function (left, right) {
//   const merged = [];
//   let leftIdx = 0,
//       rightIdx = 0;
//   while (leftIdx < left.length && rightIdx < right.length) {
//     if (left[leftIdx] < right[rightIdx]) {
//       merged.push(left[leftIdx++]);
//     } else {
//       merged.push(right[rightIdx++]);
//     }
//   }
//   for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
//   for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
//   return merged;
// };

// // from old video...
// function merge (left, right) {
//   const merged = [];
//   let leftIdx = 0,
//       rightIdx = 0,
//       leftVal,
//       rightVal;
//   // admittedly pretty convoluted, but we do this in order to avoid shift
//   while (leftIdx < left.length || rightIdx < right.length) {
//     leftVal = left[leftIdx];
//     rightVal = right[rightIdx];
//     if (leftVal < rightVal || rightVal === undefined) {
//       merged.push(leftVal);
//       leftIdx++;
//     } else {
//       merged.push(rightVal);
//       rightIdx++;
//     }
//   }
//   return merged;
// }
