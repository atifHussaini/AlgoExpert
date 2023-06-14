function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);
    let leftIdx = 0;
    let rightIdx = array.length -1;
  
    while (leftIdx < rightIdx) {
      const left = array[leftIdx];
      const right = array[rightIdx];
      
      if (left + right === targetSum) {
        return [left, right];
      } else if (left + right < targetSum) {
        leftIdx++;
      } else {
        rightIdx--
      }
    }
  
    return [];
  }

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10))