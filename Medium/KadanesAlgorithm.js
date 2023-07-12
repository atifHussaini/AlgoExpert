function kadanesAlgorithm(array) {
    const workingSet = new Set();
    let sum = 0;
    let maxSubArray = 0;
  
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      sum += current;
      
      for (let j = i+1; j < array.length; j++) {
        const next = array[j];
        sum += next;
  
        if (sum > maxSubArray) {
          maxSubArray = sum;
        }
      }
      workingSet.add(maxSubArray);
      sum = 0;
    }
  
    let maxSum = -Infinity;
    for (let sum of workingSet) {
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    return maxSum;
}

console.log(kadanesAlgorithm([3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]))