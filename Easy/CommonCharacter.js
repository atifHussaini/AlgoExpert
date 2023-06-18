function commonCharacters(strings) {
    const completeMap = new Map();
    const commonArr = [];
  
    for (let i = 0; i < strings.length; i++) {
      const workingSet = new Set(strings[i]);
  
      for (let character of workingSet) {
         if (!completeMap.has(character)) {
          completeMap.set(character, 1);
        } else {
          completeMap.set(character, completeMap.get(character) + 1);
        }
      }
    }
  
    for (let [character, value] of completeMap) {
      if (value === strings.length) {
        commonArr.push(character);
      }
    }
    return commonArr;
}

console.log(commonCharacters(["abc", "bcd", "cbaccd"]));