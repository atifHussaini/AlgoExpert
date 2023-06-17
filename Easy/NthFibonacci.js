function getNthFib(n) {
    const fibArr = [0,1];
    for (let i = 0; i < n-2; i++) {
      fibArr.push(fibArr[i] + fibArr[i+1]);
    }
    return fibArr[n-1];
}

console.log(getNthFib(10))