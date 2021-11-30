/*
@param {number[]} digits
@return {number[]}
*/

let test1 = [1, 2, 3];
let test2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let test3 = [9];
let test4 = [0];

// initial solution
// for some reason, using Number() on test2 yields the same number but the ending three digits all becoming 0. no explanation for this right now but hopefully come up with answers soon

// var plusOne = (digits) => {
//   let joined = digits.join('');
//   joined++;
//   joined = JSON.stringify(joined);
//   let result = [];
//   for (let i = 0; i < joined.length; i++) {
//     result.push(Number(joined[i]));
//   }
//   return result;
// }

// leetcode discussion solution

var plusOne = (digits) => {
  let i = digits.length - 1;
  while (i > -1) {
    digits[i]++;
    if (digits[i] < 10) return digits;
    digits[i] = 0;
    i--;
  }
  return [1, ...digits];
}

console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));
console.log(plusOne(test4));