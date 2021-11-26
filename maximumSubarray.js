/*
@param {number[]} nums
@return {number}
*/
let test1 = [-2,1,-3,4,-1,2,1,-5,4];
let test2 = [5,4,-1,7,8];
let test3 = [-2, -1];
let test4 = [-1, 0, -2];

// O(2n) time complexity, first submission

var maxSubArray = function(nums) {

  let max = nums[0];
  let current = 0;

  if (nums.length === 1) return max;

  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    if (current > max) {
      max = current;
    }
    for (let j = i + 1; j < nums.length; j++) {
      current += nums[j];
      if (current > max) {
        max = current;
      } else {
        continue;
      }
    }
  }

  return max;
};

console.log(maxSubArray(test1));
console.log(maxSubArray(test2));
console.log(maxSubArray(test3));
console.log(maxSubArray(test4));