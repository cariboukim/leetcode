/*
@param {string} a
@param {string} b
@return {string}
 */

// initial submission

let a1 = '11';
let b1 = '1';

// var addBinary = (a, b) => {
//   let length = 0;

//   a.length > b.length ? length = a.length : length = b.length;

//   let binarray = [];
//   let counter = 0;

//   for (let i = length - 1; i >= 0; i--) {
//     let sum = (Number(a[i]) || 0) + (Number(b[i]) || 0);
//     console.log(sum);
//   }

//   // return binarray.join('');
// }

// leetcode discussion solution

var addBinary = (a, b) => {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
}

console.log(addBinary(a1, b1));