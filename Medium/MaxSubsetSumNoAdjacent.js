function maxSubsetSumNoAdjacent(array) {
    const length = array.length;
    const sumSet = new Set();
  
    if (length % 2 === 0) {
      let count = 0;
      const firstEle = array[0];
      const lastEle = array[length-1];
      const secondLastEle = array[length-2];
      
      while (count <= 3) {
        let sum = 0;
        
        if (count === 0) {
          for (let i = 0; i < array.length - 3; i+=2) {
            const current = array[i];
            sum += current;
          }
          sum += lastEle;
          sumSet.add(sum);
        } else if (count === 1) {
          for (let i = 0; i < array.length - 3; i+=2) {
            const current = array[i];
            sum += current;
          }
          sum += secondLastEle;
          sumSet.add(sum);
        } else if (count === 2) {
          for (let i = 1; i < array.length; i+=2) {
            const current = array[i];
            sum += current;
          }
          sumSet.add(sum);
        } else {
          for (let i = 3; i < array.length; i+=2) {
            const current = array[i];
            sum += current
          }
          sum += firstEle;
          sumSet.add(sum);
        }
        count++;
      }
    } else {
      let count = 0;
      const lastEle = array[length-1];
      const secondLastEle = array[length-2];
      
      while (count <= 2) {
        let sum = 0;
        
        if (count === 0) {
          for (let i = 0; i < array.length; i+=2) {
            const current = array[i];
            sum += current;
          }
          sumSet.add(sum);
        } else if (count === 1) {
          for (let i = 1; i < array.length - 3; i+=2) {
            const current = array[i];
            sum += current;
          }
          sum += lastEle;
          sumSet.add(sum);
        } else {
          for (let i = 1; i < array.length - 3; i+=2) {
            const current = array[i];
            sum += current;
          }
          sum += secondLastEle;
          sumSet.add(sum);
        }
        count++;
      }
    }
    console.log(sumSet)
  
    let max = 0;
    for (let num of sumSet) {
      if (num > max) {
        max = num;
      }
    }
    return max;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))

  