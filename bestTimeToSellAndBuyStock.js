// unoptimized

// const maxProfit = (prices) => {

//   let low = prices[0];

//   let profit = 0;

//   for(let i = 0; i < prices.length; i++) {
//       if ( prices[i] < low ) {
//           low = prices[i];
//       }
//       if ( prices[i] - low > profit) {
//           profit = prices[i] - low;
//       }
//   }

//   return profit;

// };

// optimized

const maxProfit = (prices) => {
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    min = Math.min(min, current);
    max = Math.max(max, current - min);
  }

  return max;
};

let stocks = [7,1,5,3,6,4];

console.log(maxProfit(stocks));