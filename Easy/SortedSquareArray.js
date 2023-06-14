function sortedSquaredArray(array) {
  const powArr = [];

  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    powArr.push(Math.pow(ele, 2));
  }
  
  return powArr.sort((a,b) => a-b);
}

  console.log(sortedSquaredArray([-5,-4,-3,2,1]))