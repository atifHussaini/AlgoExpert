function isMonotonic(array) {
    let isIncreasing = true;
    let isDecreasing = true;
    
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      const next = array[i+1];
  
      if (current > next) {
        isIncreasing = false;
      } else if (current < next) {
        isDecreasing = false;
      }
    }
    return isDecreasing || isIncreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))