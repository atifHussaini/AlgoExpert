function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      let isSwapped = false;
      
      for (let j = 0; j < array.length; j++) {
        
        if(array[j] > array[j+1]) {
          let temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          isSwapped = true;
        }
        
      }
      
      if(!isSwapped) {
          break;
      }
    }
    
    return array;
  }

  console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))