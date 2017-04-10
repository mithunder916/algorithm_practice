function tripleStep(stepCount, memo = {}){
  // base case
  if (stepCount === 0) return 1;
  if (stepCount < 0) return 0;

  let memoKey = stepCount.toString();

  // check memo
  if (memo.hasOwnProperty(memoKey)){
    return memo[memoKey];
  }

  // recursive case
  memo[memoKey] = tripleStep(stepCount - 1) + tripleStep(stepCount - 2) + tripleStep(stepCount - 3);

  //return value
  return memo[memoKey];
}

tripleStep(5);
