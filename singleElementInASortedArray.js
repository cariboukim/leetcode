let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

// unoptimized / O(n) space complexity

// var singleNonDuplicate = (nums) => {
//   let count = [] ;
//   let single = 0;

//   for (let i = 0; i < nums.length; i++) {
//     count.indexOf(nums[i]) > -1 ? count.pop() : count.push(nums[i]);
//   }

//   return count[0];
// }

var singleNonDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      return nums[i];
    }
  }
}

console.log(singleNonDuplicate(nums));