function bubbleSort(array) {
  let count = 0;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    
    for (let i = 0; i < array.length - 1 - count; i++) {
      const current = array[i];
      const compare = array[i+1];

      if (current > compare) {
        array[i] = compare;
        array[i+1] = current;
        isSorted = false;
      } 
    }
    count++;
  }
  return array;
}

  console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))