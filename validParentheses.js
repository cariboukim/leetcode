// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

let parens = '({[]})';
let parensFalse = '[}';
let parensSingle = '(';

// var isValid = (s) => {
//   if (s.length === 1) return false;
//   let count = {};

//   for (let i = 0; i < s.length; i++) {
//     !count[s[i]] ? count[s[i]] = 1 : count[s[i]] ++;
//   }

//   if (count['{'] !== count['}'] || count['('] !== count[')'] || count['['] !== count[']']) {
//     return false;
//   } else {
//     return true;
//   }

// };

// first attempt doesn't check for complete parentheses pairs but just not ordered. need to check for pairs and ordered now!

var isValid = (s) => {
  if (s.length === 1) return false;

  let test = ['[]', '{}', '()'];

  let index = 0;

  let array = s.split('');

  const recursion = (a, i) => {
    if (i === a.length - 1 || a.length === 0) {
      return;
    } else {
      if (test.indexOf(a[i] + a[i + 1]) > -1) {
        a.splice(i, 2);
        return recursion(a, i -= 1);
      } else {
        return recursion(a, i += 1);
      }
    }
  }
  recursion(array, index);

  if (array.length === 0) {
    return true;
  } else {
    return false;
  }
}


// console.log(isValid(parensSingle));
console.log(isValid(parensFalse));
// console.log(isValid(parens));
