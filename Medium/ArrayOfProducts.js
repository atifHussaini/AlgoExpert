function arrayOfProducts(array) {
    const finalArr = [];
    let pointer = 0;
    let productSum = 1;
  
    while (pointer < array.length) {
  
      for (let i = 0; i < array.length; i++) {
        const current = array[i];
  
        if (i === pointer) continue;
        productSum *= current;
      }
      finalArr.push(productSum);
      pointer++;
      productSum = 1;
    }
    return finalArr;
}

console.log(arrayOfProducts([9, 3, 2, 1, 9, 5, 3, 2]))