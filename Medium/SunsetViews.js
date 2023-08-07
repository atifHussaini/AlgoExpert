function sunsetViews(buildings, direction) {
    const finalArr = [];
  
    if (direction === 'EAST') {
      for (let i = 0; i < buildings.length; i++) {
        const building = buildings[i];
        let isTaller = true
  
        for (let j = i+1; j < buildings.length; j++) {
          const nextBuilding = buildings[j];
  
          if (building > nextBuilding) continue;
          else {
            isTaller = false;
            break;
          }
        }
        if (isTaller) finalArr.push(i);
      }
    }
  
    if (direction === 'WEST') {
      for (let i = buildings.length - 1; i > -1; i--) {
        const building = buildings[i];
        let isTaller = true;
  
        for (let j = i-1; j > -1; j--) {
          const nextBuilding = buildings[j];
  
          if (building > nextBuilding) continue;
          else {
            isTaller = false;
            break;
          }
        }
        if (isTaller) finalArr.push(i);
      }
    }
    return finalArr.sort((a,b) => a - b);
  }

  console.log(sunsetViews([7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5], "EAST"))