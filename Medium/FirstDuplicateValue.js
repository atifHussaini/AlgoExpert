function firstDuplicateValue(array) {
    const duplicateSet = new Set();
  
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
  
      if (!duplicateSet.has(current)) {
        duplicateSet.add(current)
      } else {
        return current;
      }
    }
    return -1;
  }

console.log(firstDuplicateValue([11, 10, 5, 3, 1, 7, 10, 6, 10, 11, 7]))

