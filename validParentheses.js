// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

let parens = '({[]})';
let parensFalse = '[{}';
let parensSingle = '(';

var isValid = (s) => {
  if (s.length === 1) return false;
  let count = {};

  for (let i = 0; i < s.length; i++) {
    !count[s[i]] ? count[s[i]] = 1 : count[s[i]] ++;
  }

  if (count['{'] !== count['}'] || count['('] !== count[')'] || count['['] !== count[']']) {
    return false;
  } else {
    return true;
  }

};

console.log(isValid(parensSingle));

console.log(isValid(parensFalse));

console.log(isValid(parens));
