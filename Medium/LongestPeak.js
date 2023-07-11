function longestPeak(array) {
    const peakMap = new Map();
  
    for (let i = 0; i < array.length; i++) {
      const previous = array[i-1];
      const current = array[i];
      const next = array[i+1];
      let count = 1;
      
      if (current > previous && current > next) {
        
        for (let j = i; j > -1 ; j--) {
          const left = array[j-1];
          const current = array[j];
          
          if (current > left) {
            count++;
          } else {
            break;
          }
        }
  
        for (let k = i; k < array.length; k++) {
          const right = array[k+1];
          const current = array[k];
          
          if (current > right) {
            count++;
          } else {
            break;
          }
        }
        peakMap.set(i, count);
      }
    }
  
    let maxLength = 0;
  
    for (let [index, length] of peakMap) {
      if (length > maxLength) {
        maxLength = length;
      }
    }
    return maxLength;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))