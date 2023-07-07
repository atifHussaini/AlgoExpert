function missingNumbers(nums) {
    const finalArr = [];
    const length = nums.length + 2;
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < length; i++) {
      const current = nums[i];
  
      if (current !== i+1) {
        nums.splice(i, 0, i+1);
        finalArr.push(i+1);
      }
    }
    return finalArr;
}

console.log(missingNumbers([1, 2, 7, 5, 4]))