// Given a non-negative number represented as an array of digits,
// add 1 to the number ( increment the number represented by the digits ).
// The digits are stored such that the most significant digit is at the head of the list.
// Example:
// If the vector has [1, 2, 3]
// the returned vector should be [1, 2, 4]
// as 123 + 1 = 124.


// check length of array to determine place value
// e.g. if length is 3, take el[1] and multiply by 100 (10*length-1)
// store this value somewhere
// shift out the first element and recursively call the function on the modified array
// base case is array.length = 1
// add all the store numbers and add 1 to them

function addOne(numArray, store){
  store = store ? store : [];
  if (numArray.length === 1) {
    // base case
    store.push(numArray[0], 1)
  } else {
    // recursive case
    let placeValue = Math.pow(10,(numArray.length - 1));
    store.push(numArray[0] * placeValue)
    numArray.shift()
    addOne(numArray, store)
  }
  return store.reduce(function(a,b){
      return a + b
    }, 0);
}

let arr = [0,1,2,3];
addOne(arr);

// originally made the mistake of returning store.reduce in the base case, which returned undefined
// that's because nothing is ever done with that returned value - it is the result of the last recursive call, but it doesn't get saved anywhere
// ultimately, it's the return value of the first function call that we're concerned with

// Flow:
// 1. store is initialized as an empty array
// 2. recursive case runs, pushing the first array element multiplied by its place value
// 3. recursive calls continue to run until one element remains
// 4. base case pushes last element and 1 into the array
// 5. All the function calls have to resolve; however, nothing is done with the return values of the recursive calls, since we're not saving them and they only exist within the function's scope. The only value we actually see is the return value of the first function call, which was called on the global scope.

// This idea is illustrated in the version below, where we actually store those recursive call return values in an array

// function addOne(numArray, store, calls){
//   store = store ? store : [];
//   calls = calls ? calls : [];
//   if (numArray.length === 1) {
//     store.push(numArray[0], 1)
//   } else {
//     let placeValue = Math.pow(10,(numArray.length - 1));
//     store.push(numArray[0] * placeValue)
//     numArray.shift()
//     calls.push(addOne(numArray, store, calls))
//   }
//   console.log(calls);
//   debugger;
//   return store.reduce(function(a,b){
//       return a + b
//     }, 0);
// }
