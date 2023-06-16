function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => a-b);
    blueShirtHeights.sort((a,b) => a-b);
  
    if (redShirtHeights[0] > blueShirtHeights[0]) {
      for (let i = 0; i < redShirtHeights.length; i++) {
        if (redShirtHeights[i] <= blueShirtHeights[i]) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < blueShirtHeights.length; i++) {
        if (redShirtHeights[i] >= blueShirtHeights[i]) {
          return false;
        }
      }
    }
    return true;
  }

  console.log(classPhotos([5, 8, 1, 3, 4],[6, 9, 2, 4, 5]))