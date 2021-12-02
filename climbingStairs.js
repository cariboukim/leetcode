/*
 * @param {number} n
 * @return {number}
 */

let test1 = 2;
let test2 = 3;

var climbStairs = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

console.log(climbStairs(test1));
console.log(climbStairs(test2));