// function commonCharacters(strings) {
//     const completeMap = new Map();
//     const commonArr = [];
  
//     for (let i = 0; i < strings.length; i++) {
//       const workingSet = new Set(strings[i]);
  
//       for (let character of workingSet) {
//          if (!completeMap.has(character)) {
//           completeMap.set(character, 1);
//         } else {
//           completeMap.set(character, completeMap.get(character) + 1);
//         }
//       }
//     }
  
//     for (let [character, value] of completeMap) {
//       if (value === strings.length) {
//         commonArr.push(character);
//       }
//     }
//     return commonArr;
// }


function commonCharacters(strings) {
  const length = strings.length;
  const stringMap = new Map();

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i].split("");
    const removeDuplicates = new Set(string);

    for (let j = 0; j < removeDuplicates.length; j++) {
      const character = removeDuplicates[j];
      
      if (!stringMap.has(character)) {
        stringMap.set(character, 1);
      } else {
        stringMap.set(character, stringMap.get(character)+1);
      }
    }
  }
  
  const finalArr = [];
  for (let [character, value] of stringMap) {
    if (value === length) {
      finalArr.push(character);
    }
  }
  return finalArr;
}

console.log(commonCharacters(["abc", "bcd", "cbaccd"]));