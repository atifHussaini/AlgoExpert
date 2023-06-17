function findThreeLargestNumbers(array) {
    if (array.length <= 3) return array.sort((a,b) => a-b);
  
    const finalArr = [];
  
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
  
      if (i <= 2) {
        finalArr.push(current);
      } else {
        for (let j = 0; j < finalArr.length; j++) {
          finalArr.sort((a,b) => a-b);
          const compare = finalArr[j];
          
          if (current >= compare) {
            finalArr.splice(j, 1, current);
            break;
          }
        }
      }
    }
  
    return finalArr.sort((a,b) => a-b);
  }

//   function findThreeLargestNumbers(array) {
//     let largestNums = [-Infinity, -Infinity, -Infinity];
  
//     for (let i = 0; i < array.length; i++) {
//       largestNums.sort((a,b) => a-b);
//       const current = array[i];
  
//       if (current >= largestNums[0]) {
//         largestNums[0] = current;
//       } else if (current >= largestNums[1]) {
//         largestNums[1] = current;
//       } else if (current >= largestNums[2]) {
//         largestNums[2] = current;
//       }
//     }
  
//     return largestNums.sort((a,b) => a-b);
//   }

