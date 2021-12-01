/*
@param {number} x
@return {number}
*/

// initial solution

let test1 = 4;
let test2 = 8;

// var mySqrt = (x) => {
//   let sqrt = 0;
//   let i = 1;

//   while (i < 100000) {
//     if (i**2 > x) {
//       sqrt = i - 1;
//       break;
//     }
//     i++;
//   }

//   return sqrt;
// }

// fastest solution on leetcode

var mySqrt = (x) => {
  return parseInt(Math.sqrt(x));
}

console.log(mySqrt(test1));
console.log(mySqrt(test2));