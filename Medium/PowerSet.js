function powerset(array) {
    const finalSet = new Set();
    finalSet.add([]);
    // if (array.length === 0) finalSet.add([]);
  
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      const workingArr = [current];
      finalSet.add(workingArr);
  
      for (let j = 0; j < array.length; j++) {
        const next = array[j];
        if (i !== j) {
          workingArr.push(next);
          workingArr.sort((a,b) => a - b);
          if (!finalSet.has(workingArr)) finalSet.add(workingArr);
          workingArr.pop();
        }
      }
    }
  
    console.log(finalSet)
}

console.log(powerset([1,2,3,4,5,6]))