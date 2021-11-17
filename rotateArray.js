var rotate = function(nums, k) {
  var index = 0;
  k > nums.length ? index = k % nums.length : index = k;
  let chunk = nums.splice(nums.length - index);
  nums.splice(0, 0, ...chunk);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));