function majorityElement(array) {
    let count = 0;
    let answer = null;
  
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
  
      if (count === 0) answer = current;
  
      if (current === answer) {
        count++;
      } else {
        count--;
      } 
    }
    return answer;
  }

console.log(majorityElement([1,1,2,2,7,2,2]))