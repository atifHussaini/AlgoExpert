function bestDigits(number, numDigits) {
    const numArr = number.split("").map(num => parseInt(num));
    let count = 0;
  
    while (count < numDigits) {
      const lastIndex = numArr.length - 1;
      for (let i = 0; i < numArr.length; i++) {
        const current = numArr[i];
        const next = numArr[i+1]
    
        if (current < next) {
          numArr.splice(i,1);
          break;
        } 
      }
      numArr.splice(lastIndex,1);
      count++
    }
    return numArr.join("");
}

console.log(bestDigits("11111111119999999999", 10))