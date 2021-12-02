/*
 * @param {number} n
 * @return {number}
 */

// solution using the fibonacci sequence

let test1 = 2;
let test2 = 3;

// var climbStairs = (n) => {
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i < n; i++) {
//     [a, b] = [b, a + b];
//   }

//   return b;
// }

// solution using memoization

var climbStairs = (n) => {
  const memo = [];
  return climb(0, n , memo);
}

function climb(steps, stepsLeft, memo) {
  if (stepsLeft === 1) {
    return 1;
  }

  if (stepsLeft === 2) {
    return 2;
  }

  if (!memo[stepsLeft]) {
    const onestep = climb(1, stepsLeft - 1, memo);
    const twostep = climb(2, stepsLeft - 2, memo);
    memo[stepsLeft] = onestep + twostep;
  }

  return memo[stepsLeft];
}

console.log(climbStairs(test1));
console.log(climbStairs(test2));