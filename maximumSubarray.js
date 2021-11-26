/*
@param {number[]} nums
@return {number}
*/
let test1 = [-2,1,-3,4,-1,2,1,-5,4];
let test2 = [5,4,-1,7,8];
let test3 = [-2, -1];
let test4 = [-1, 0, -2];

// O(2n) time complexity, first submission, time limit exceeded with larger arrays

// var maxSubArray = function(nums) {

//   let max = nums[0];
//   let current = 0;

//   if (nums.length === 1) return max;

//   for (let i = 0; i < nums.length; i++) {
//     current = nums[i];
//     if (current > max) {
//       max = current;
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       current += nums[j];
//       if (current > max) {
//         max = current;
//       } else {
//         continue;
//       }
//     }
//   }

//   return max;
// };

// discussion solution, using Math.max to find greatest sum

// var maxSubArray = (nums) => {
//   let max = nums[0];
//   let sum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     sum = Math.max(nums[i], sum + nums[i]);
//     max = Math.max(max, sum);
//   }

//   return max;
// }

// leetcode fastest solution, fastest by a mile

var maxSubArray = (nums) => {
  let max = nums[0];
  let sum = 0;

  for (let i of nums) {
    sum += i;

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

console.log(maxSubArray(test1));
console.log(maxSubArray(test2));
console.log(maxSubArray(test3));
console.log(maxSubArray(test4));