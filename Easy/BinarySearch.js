function binarySearch(array, target) {
    let leftPointer = 0;
    let rightPointer = array.length-1;
    
    while (leftPointer <= rightPointer) {
      const middleIndex = Math.floor((leftPointer + rightPointer) / 2);
      const compare = array[middleIndex];
  
      if (target === compare) {
        return middleIndex;
      } else if (target < compare) {
        rightPointer = middleIndex - 1;
      } else {
        leftPointer = middleIndex + 1;
      }
    }
    return -1;
}

console.log(binarySearch([0,1,21,32,45,45,61,71,72,73], 0))