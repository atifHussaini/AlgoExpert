function minimumWaitingTime(queries) {
    let sortedQueries = queries.sort((a,b) => a-b);
    let total = 0
   
    for (let i = 0; i < sortedQueries.length-1; i++) {
      
      let prev = sortedQueries[i-1];
      total += total + current;
    }
    console.log(sortedQueries)
    return total;
  }

  console.log(minimumWaitingTime([3,2,1,2,6]))