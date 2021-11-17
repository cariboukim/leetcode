// var searchInsert = function(nums, target) {
//   let n = 0;
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] === target) {
//       return n = i;
//     } else if (nums[i] > target) {
//       return n = i;
//     } else {
//       n = -1;
//     }

//     i++;
//   }

//   if (n === -1) {
//     if (target > nums[nums.length - 1]) {
//       return n = nums.length;
//     } else if (target < nums[0]) {
//       return n = 0;
//     }
//   }
// };

var searchInsert = function(nums, target) {
  const arrLength = nums.length;
  let a = 0;

  for (let i = 0; i < arrLength; i++) {
    if (i === arrLength - 1 && nums[i] !== target) a = i + 1;
    if (nums[i] == target || nums[i] > target) {
      return a = i;
    }
  }

  return a;
}

console.log(searchInsert([1, 3, 5, 6], 3));