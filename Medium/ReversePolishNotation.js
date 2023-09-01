function reversePolishNotation(tokens) {
    const tokensCopy = [...tokens];
  
    for (let i = 0; i < tokensCopy.length;) {
      const current = tokensCopy[i];
      const firstToken = parseInt(tokensCopy[i-2]);
      const secondToken = parseInt(tokensCopy[i-1]);
      let result = ""
  
      if (current === "+" || current === "-" || current === "*" || current === "/") {
        if (current === "+") result = firstToken + secondToken;
        if (current === "-") result = firstToken - secondToken;
        if (current === "*") result = firstToken * secondToken;
        if (current === "/") result = Math.trunc(firstToken / secondToken);
        tokensCopy.splice(i-2, 3, result.toString());
        i--;
      } else {
        i++;
      }
    }
    return parseInt(tokensCopy[0]);
}

console.log(reversePolishNotation(["50", "3", "17", "+", "2", "-", "/"]))