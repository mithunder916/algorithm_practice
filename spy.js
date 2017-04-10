function adder(n1, n2) { return n1 + n2; }

var adderSpy = spyOn( adder );

adderSpy.getCallCount(); // 0

adderSpy(2, 4); // returns 6
adderSpy.getCallCount(); // 1

adderSpy(3, 5); // returns 8
adderSpy.getCallCount(); // 2
adderSpy.wasCalledWith(2); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(6); // true
adderSpy.returned(9); // false


function spyOn(fn){
  let callCount = 0,
      calledWith = [],
      returnedVals = [];

  // using rest operator on args allows us to access any number of passed arguments
  function spy(...args){
    args.forEach(arg => calledWith.push(arg) );
    let returnVal = fn(...args);
    returnedVals.push(returnVal);
    callCount++;
    return returnVal;
  }
  spy.getCallCount = () => callCount;

  spy.wasCalledWith = arg => {
    return calledWith.includes(arg)
    // can also do: return calledWith.indexOf(val) > -1;
  }

  spy.returned = arg => {
    return returnedVals.includes(arg)
  }

  return spy;
}
