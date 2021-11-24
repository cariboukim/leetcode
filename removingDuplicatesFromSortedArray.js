// @param {number[]} nums
// @return {number}

/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. */

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// initial solution, unoptimized

let test1 = [1, 1, 2];
let test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function(nums) {
  let current;
  let i = 0;

  for (let i = 0; i < nums.length; i++) {
    if (current !== nums[i]) {
      current = nums[i]
    } else {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

// leetcode fastest submission

var removeDuplicates = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) continue;
    nums[count] = nums[i];
    count++;
  }

  return count;
}

// console.log(removeDuplicates(test1));
console.log(removeDuplicates(test2));
