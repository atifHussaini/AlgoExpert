function sortedSquaredArray(array) {
    const finalArr = []
    
    let startIdx = 0
    let endIdx = array.length - 1
  
    for (let i = array.length-1; i >= 0; i--) {
    //   const small = array[startIdx]
    //   const large = array[endIdx]

      if (Math.abs(array[startIdx]) > Math.abs(array[endIdx])) {
        finalArr.unshift(array[startIdx]**2)
        startIdx++
      } else {
        finalArr.unshift(array[endIdx]**2)
        endIdx--
      }
    }
    return finalArr
  }

  console.log(sortedSquaredArray([-5,-4,-3,2,1]))