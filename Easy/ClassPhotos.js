// function classPhotos(redShirtHeights, blueShirtHeights) {
//     redShirtHeights.sort((a,b) => a-b);
//     blueShirtHeights.sort((a,b) => a-b);
  
//     if (redShirtHeights[0] > blueShirtHeights[0]) {
//       for (let i = 0; i < redShirtHeights.length; i++) {
//         if (redShirtHeights[i] <= blueShirtHeights[i]) {
//           return false;
//         }
//       }
//     } else {
//       for (let i = 0; i < blueShirtHeights.length; i++) {
//         if (redShirtHeights[i] >= blueShirtHeights[i]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b) => a-b);
  blueShirtHeights.sort((a,b) => a-b);
  const redStart = redShirtHeights[0];
  const blueStart = blueShirtHeights[0];
  
  if (redStart > blueStart) {
    for (let i = 0; i < redShirtHeights; i++) {
      const redPerson = redShirtHeights[i];
      const bluePerson = blueShirtHeights[i];

      if (redPerson < bluePerson) return false;
    }
  } else if (redStart < blueStart) {
      for (let i = 0; i < redShirtHeights; i++) {
        const redPerson = redShirtHeights[i];
        const bluePerson = blueShirtHeights[i];
  
        if (redPerson > bluePerson) return false;
      }
  } else {
    return false;
  }
  return true;
}

// console.log(classPhotos([19, 2, 4, 6, 2, 3, 1, 1, 4],[21, 5, 4, 4, 4, 4, 4, 4, 4]))