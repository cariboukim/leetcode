/*
@param {string} s
@return {number}
*/

// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

let test1 = 'Hello World';
let test2 = '   fly me   to   the moon  ';

// initial solution

// var lengthOfLastWord = function(s) {
//   let sArray = s.split(' ');
//   return sArray.pop().length;
// };

// implemented recursion

var lengthOfLastWord = function(s) {
  let sArray = s.split(' ');
  let word = '';
  let last = (sArray) => {
    word = sArray.pop();
    if (word !== '') {
      return;
    }
    last(sArray);
  }

  last(sArray);
  return word.length;
};

console.log(lengthOfLastWord(test1));
console.log(lengthOfLastWord(test2));
