function bestSeat(seats) {
    const seatMap = new Map();
  
    for (let i = 1; i < seats.length - 1; i++) {
      const seat = seats[i];
      let length = 0;
  
      if (seat === 0) {
        seatMap.set(i, length);
        
        for (let j = i+1; j < seats.length - 1; j++) {
          const nextSeat = seats[j];
  
          if (nextSeat === 0) {
            seatMap.set(i, seatMap.get(i) + 1);
          } else {
            break;
          }
        }
      }
    }
  
    console.log(seatMap)
    let maxLength = -Infinity;
    let bestSeat = -1;
   
    for (const [index, length] of seatMap) {
      if (length > maxLength) {
        maxLength = length;
        bestSeat = index;
      }
    }
  
    if (seatMap.size !== 0) {
      return bestSeat + Math.floor(maxLength/2);
    } else {
      return -1;
    }
  }

  console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]))