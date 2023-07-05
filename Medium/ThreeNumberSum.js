function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a-b)
    const finalArr = [];
  
    for (let i = 0; i < array.length; i++) {
      const first = array[i];
  
      for (let j = i+1; j < array.length; j++) {
        const second = array[j];
        const third = targetSum - first - second;
  
        if (array.includes(third) && third !== first && third !== second) {
          const subArr = [first, second, third]
          subArr.sort((a,b) => a-b);
          finalArr.push(subArr);
        }
      }
    }
  
    const stringArr = finalArr.map(element => JSON.stringify(element));
    const finalSet = new Set(stringArr);
    const returnArray = Array.from(finalSet, JSON.parse);
    return returnArray;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))