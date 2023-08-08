function collidingAsteroids(asteroids) {
    const length = asteroids.length;
    let count = 0;
    
    while (count < length) {
      for (let i = 0; i < asteroids.length; i++) {
      const current = asteroids[i];
      const previous = asteroids[i-1];
      const next = asteroids[i+1];
  
      if (current < 0) {
        if (previous > 0) {
          if (Math.abs(current) === Math.abs(previous)) {
            asteroids.splice(i, 1);
            asteroids.splice(i-1,1);
          } else if(Math.abs(current) > Math.abs(previous)) {
            asteroids.splice(i-1,1);
          } else {
            asteroids.splice(i,1);
          }
        } 
      } else if (current > 0) {
        if (next < 0) {
          if (Math.abs(current) === Math.abs(next)) {
            asteroids.splice(i+1,1);
            asteroids.splice(i,1);
          } else if(Math.abs(current) > Math.abs(next)) {
            asteroids.splice(i+1,1);
          } else {
            asteroids.splice(i,1);
          }
        }
      }
      }
      count++;
    }
    return asteroids;
}

console.log(collidingAsteroids([-3, 7, -8, 6, 7, -5, -7]))