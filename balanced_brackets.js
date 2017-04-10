// RegEx is used to remove whitespaces from string
// place all opening brackets in a stack; if a closing bracket is encountered, pop off the top element of the stack and check if it is the right type of opening bracket
// if not, return false; if we can safely go through the entire string, return true
// ** can also do string.split(' ').join('') to remove whitespaces
function bracketValidator(string){
  let bracketArray = string.replace(/\s/g, '').split(''),
      stack = [],
      oppositeBracket = { '}': '{', ']': '[', ')':'(' };
  for (let i = 0; i < bracketArray.length; i++){
    if (bracketArray[i] === '{' || bracketArray[i] === '[' || bracketArray[i] === '('){
      stack.push(bracketArray[i])
    } else {
      let recentBracket = stack.pop();
      if (recentBracket !== oppositeBracket[bracketArray[i]]) return false
    }
  }
  return true;
}


bracketValidator("{ [ ] ( ) }")
// bracketValidator("{[(])}")
// bracketValidator("{[}")
// bracketValidator("{[([{()[]{}}])]}")

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false
// "{ [ ( [ { ( )[ ]{ } } ] ) ] }" should return true
