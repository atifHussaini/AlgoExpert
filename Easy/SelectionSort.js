function selectionSort(array) {
    let count = 0;
  
    while (count < array.length) {
     
      for (let i = 0; i < array.length; i++) {
        const current = array[i];
        let min = Infinity;
        let swappedIndex;
  
        if (current < min) min = current;
    
        for (let j = i+1; j < array.length; j++) {
          const compare = array[j];
  
          if (compare < min) {
            min = compare;
            swappedIndex = j;
          }
        }
        
        array[swappedIndex] = current
        array[i] = min;
      }
      
      count++;
    }
    
    return array;
}

console.log(selectionSort([8,5,2,9,5,6,3]))