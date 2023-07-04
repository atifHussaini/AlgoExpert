function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b);
    let minWait = 0;
    let movingTotal = 0;
  
    for (let i = 0; i < queries.length; i++) {
      const previous = queries[i-1];
  
      if (i === 0) {
        movingTotal = 0
      } else {
        movingTotal += previous;
      }
      
      minWait += movingTotal;
    }
    return minWait;
  }

console.log(minimumWaitingTime([3,2,1,2,6]))