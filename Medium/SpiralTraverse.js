function spiralTraverse(array) {
    const finalArr = [];
    let count = 0;
  
    while (array.length) {
      if (count % 2 === 0) {
        for (let i = 0; i < array.length; i++) {
          const current = array[i];
  
          if (current.length) {
            if (i === 0) {
              for (let j = 0; j < current.length; j++) {
                const ele = current[j];
                finalArr.push(ele);
              }
            } else {
                const lastEle = current[current.length-1]
                finalArr.push(lastEle);
                current.pop();
            }
          }
        }
        array.shift();
      } else {
        for (let i = array.length-1; i > -1; i--) {
          const current = array[i];
  
          if(current.length) {
            if (i === array.length-1) {
              for (let j = current.length - 1; j > -1; j--) {
                const ele = current[j];
      
                finalArr.push(ele);
              }
            } else {
              const firstEle = current[0];
              finalArr.push(firstEle);
              current.shift();
            }
          }
        }
        array.pop();
      } 
      count++;
    }
    return finalArr;
}

console.log(spiralTraverse([
    [27, 12, 35, 26],
    [25, 21, 94, 11],
    [19, 96, 43, 56],
    [55, 36, 10, 18],
    [96, 83, 31, 94],
    [93, 11, 90, 16]
  ]))

