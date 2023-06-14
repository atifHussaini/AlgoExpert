// function twoNumberSum(array, targetSum) {
//    let finalArr = [];
//     let sortedArr = array.sort((a,b) => a-b)
//     console.log(sortedArr)
//     for (let i = 0; i < array.length; i++) {
//       let elementOne = array[i]
  
//       for (let j = i+1; j < array.length; j++) {
//         let elementTwo = array[j]
  
//         if ((elementOne + elementTwo) === targetSum) {
//           finalArr.push(elementOne, elementTwo);
//         }
//       }
//     }
    
//     return finalArr;
//   }

// console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10))

function twoNumberSum(array, targetSum) {
    let nums = {};
    
    for (let num of array) {
        let potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
        return [potentialMatch, num];
        } else {
        nums[num] = true;
        }
    }
    
    return [];
}
    


console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10))