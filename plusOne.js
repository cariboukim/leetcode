/*
@param {number[]} digits
@return {number[]}
*/

let test1 = [1, 2, 3];
let test2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let test3 = [9];
let test4 = [0];

// initial solution

var plusOne = (digits) => {
  let joined = digits.join('');
  console.log(joined);
  console.log(parseInt(joined));
  joined = JSON.stringify(joined);
  let result = [];
  for (let i = 0; i < joined.length; i++) {
    result.push(Number(joined[i]));
  }
  return result;
}

// console.log(plusOne(test1));
console.log(plusOne(test2));
// console.log(plusOne(test3));
// console.log(plusOne(test4));