// var twoSum = function(nums, target) {
//   var sol;
//   // iterate over the nums array
//   for (let i = 0; i < nums.length; i++) {
//     // iterate over nums array with j, which is i + 1
//     for (let j = i + 1; j < nums.length; j++) {
//       // if i + j equals target
//       if (target === nums[i] + nums[j]) {
//         // return i and j in tuple form
//         sol = [i, j];
//       }
//     }
//   }
//   return sol;
// };

var twoSum = function(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];

    hash[target - nums[i]] = i;
  }
};

console.log(twoSum([1, 2, 3, 4], 7));