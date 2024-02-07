// function nonConstructibleChange(coins) {
//     coins.sort((a,b) => a-b);
//     let sum = 0;
  
//     for (let i = 0; i < coins.length; i++) {
//       const coin = coins[i];
      
//       if (coin > sum + 1) return sum + 1;
//       sum += coin;
//     }
//     return sum + 1;
//   }

function nonConstructibleChange(coins) {
  coins.sort((a,b) => a-b);
  let sum = 0;
  
  for (let i = 0; i < coins.length; i++) {
    const current = coins[i];

    if (sum + 1 < current) {
      return sum + 1;
    } else {
      sum += current;
    }
  }
  return sum + 1;
}


console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));