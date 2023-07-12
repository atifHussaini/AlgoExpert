function zeroSumSubarray(nums) {
    if (nums.includes(0)) return true;
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      sum += current;
  
      for (let j = i+1; j < nums.length; j++) {
        const next = nums[j];
        sum += next;
  
        if (sum === 0) return true;
      }
      sum = 0;
    }
    return false;
}

console.log(zeroSumSubarray([-5,-5,2,3,-2]))