function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b);
    arrayTwo.sort((a,b) => a-b);
  
    let smallestDiff = Infinity;
    let smallestPair = []
  
    for (let i = 0; i < arrayOne.length; i++) {
      const current = arrayOne[i];
  
      for (let j = 0; j < arrayTwo.length; j++) {
        const compare = arrayTwo[j];
        const absoluteVal = Math.abs(current - compare);
  
        if (absoluteVal < smallestDiff) {
          smallestDiff = absoluteVal;
          smallestPair = [current, compare]
        } 
      }
    }
    return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17]));