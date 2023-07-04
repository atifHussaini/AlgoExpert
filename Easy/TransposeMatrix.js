function transposeMatrix(matrix) {
    const finalArr = [];
    const finalArrLength = matrix[0].length
  
    for (let i = 0; i < finalArrLength; i++) {
      finalArr.push([]);
    }
  
    for (let j = 0; j < matrix.length; j++) {
      const currentArray = matrix[j];
  
      for (let k = 0; k < currentArray.length; k++) {
        const element = currentArray[k];
  
        finalArr[k].push(element)
      }
    }
    return finalArr;
}

console.log(transposeMatrix([
    [0, -1, -2, -3],
    [4, 5, 6, 7],
    [2, 3, -2, -3],
    [42, 100, 30, -42]
  ]))