/*
@param {string} haystack
@param {string} needle
@return {number}
*/

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

let test1 = 'hello';
let test2 = 'aaaa';
let test3 = '';
let test4 = '';

// initial solution is the optimized solution without the edge case in the beginning

var strStr = function(haystack, needle) {
  // if (haystack.length === 0 && needle.length === 0) return 0;

  return haystack.indexOf(needle);
};

console.log(strStr(test1, 'll'));
console.log(strStr(test2, 'baa'));
console.log(strStr(test3, ''));
console.log(strStr(test4, 'a'));
