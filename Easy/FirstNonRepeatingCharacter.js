function firstNonRepeatingCharacter(string) {
    const characterMap = new Map();
  
    for (let i = 0; i < string.length; i++) {
      const character = string[i];
  
      if (!characterMap.has(character)) {
        characterMap.set(character, 1);
      } else {
        characterMap.set(character, characterMap.get(character) + 1);
      }
    }
  
    for (let [character, value] of characterMap) {
      if (value === 1) {
        return string.indexOf(character);
      }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter("abcdcaf"))