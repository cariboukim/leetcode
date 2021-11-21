let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

var singleNonDuplicate = (nums) => {
  let count = [] ;
  let single = 0;

  for (let i = 0; i < nums.length; i++) {
    count.indexOf(nums[i]) > -1 ? count.pop() : count.push(nums[i]);
  }

  return count[0];
}

console.log(nonSingleDuplicate(nums));