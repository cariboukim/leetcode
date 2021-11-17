var searchInsert = function(nums, target) {
  let n = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === target) {
      return n = i;
    } else if (nums[i] > target) {
      return n = i;
    } else {
      n = -1;
    }

    i++;
  }

  if (n === -1) {
    if (target > nums[nums.length - 1]) {
      return n = nums.length;
    } else if (target < nums[0]) {
      return n = 0;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 0));