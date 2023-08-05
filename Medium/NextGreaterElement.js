function nextGreaterElement(array) {
    const finalArr = [];
    let count = 0;
    let workingArr = [...array];
  
    while (count < array.length) {
      const splicedArray = workingArr.splice(0, count);
      const current = array[count];
      let switched = false;
  
      for (let i = 0; i < splicedArray.length; i++) {
        const element = splicedArray[i];
        workingArr.push(element);
      }
  
      for (let j = 1; j < workingArr.length; j++) {
        const next = workingArr[j];
        
        if (current < next) {
          finalArr.push(next);
          switched = true;
          break;
        } 
      }
      if (!switched) finalArr.push(-1);
      count++;
      workingArr = [...array]
    }
    return finalArr;
  }

console.log(nextGreaterElement([2,5,-3,-4,6,7,2]))
  