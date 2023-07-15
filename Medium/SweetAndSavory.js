function sweetAndSavory(dishes, target) {
    const sortedDishes = dishes.sort((a,b) => a-b);
    let difference = Infinity;
    let pairing = [0,0];
    let left = 0;
    let right = sortedDishes.length - 1;
  
    while (left < right) {
      const sweet = sortedDishes[left];
      const savory = sortedDishes[right];
      const flavor = sweet + savory;
      const currentDiff = Math.abs(flavor - target);
  
      if (sweet < 0 && savory > 0) {
        if (flavor === target) {
          return [sweet, savory];
        }
  
        if (flavor > target) {
          right--;
        }
  
        if (flavor < target) {
          if (currentDiff < difference) {
            difference = currentDiff;
            pairing = [sweet, savory];
          }
          left++;
        }
      } else {
        return pairing;
      }
    }
    return pairing;
}

console.log(sweetAndSavory([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], -6))


