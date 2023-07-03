function productSum(array, depth = 1) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      if(Array.isArray(array[i])) {
        sum += productSum(array[i], depth + 1)
      } else {
        sum += array[i];
      }
    }
    return sum * depth;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))