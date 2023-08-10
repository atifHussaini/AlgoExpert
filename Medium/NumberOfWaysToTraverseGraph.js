function numberOfWaysToTraverseGraph(width, height, memo = {}) {
    const boxes = width * height;
    
    if ("boxes" in memo) return memo[boxes];
    if (width <= 1) return 1;
    if (height <= 1) return 1;
  
    memo[boxes] = numberOfWaysToTraverseGraph(width - 1, height, memo) + numberOfWaysToTraverseGraph(width, height - 1, memo);
    return memo[boxes];
}

  console.log(numberOfWaysToTraverseGraph(18,18))