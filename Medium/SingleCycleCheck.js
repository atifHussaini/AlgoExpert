function hasSingleCycle(array) {
    const length = array.length;
    const checkArray = new Array(length).fill();
    const setCheck = new Set();
    let count = 0;
    let index = 0;
  
    while (count < length) {
      const current = array[index];
      let newSpot = (index + current) % length;
  
      if (newSpot < 0) {
        newSpot = newSpot + length;
      }
  
      if (!setCheck.has(index)) {
        setCheck.add(index);
      } else {
        return false;
      }
      
      if (!checkArray[newSpot]) {
        checkArray[newSpot] = current;
        index = newSpot;
      } else {
        return false;
      }
      count++;
    }
    return true;
}

console.log(hasSingleCycle([0, 1, 1, 1, 1]))