function insertionSort(array) {
  
    for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const previous = array[i-1];

        if (current < previous) {
            for (let j = i; j > -1; j--) {
            const current = array[j];
            const previous = array[j-1];

            if (array[j] < array[j-1]) {
                array[j] = previous;
                array[j-1] = current;
            } else {
                break;
            }
            }
        }
    }
    return array;
  }

console.log(insertionSort([8,5,2,9,5,6,3]))