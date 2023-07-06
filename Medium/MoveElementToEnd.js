function moveElementToEnd(array, toMove) {
    let count = 0;
    let index = 0;
  
    while (count < array.length) {
      const current = array[index];
  
      if (current === toMove) {
        array.splice(index,1);
        array.push(current);
      } else {
        index++;
      }
      count++;
    }
    return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))