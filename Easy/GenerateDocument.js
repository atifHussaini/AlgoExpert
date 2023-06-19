function generateDocument(characters, document) {
    const charMap = new Map();
    
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
  
      if (!charMap.has(character)) charMap.set(character, 1);
      else {
        charMap.set(character, charMap.get(character) + 1);
      }
    }
    
    for (let i = 0; i < document.length; i++) {
      const character = document[i];
  
      if (!charMap.has(character)) return false;
      else {
        charMap.set(character, charMap.get(character) - 1);
      }
    }
  
    for (let [character, value] of charMap) {
      if(value < 0) return false;
    }
    
    return true;
}

console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"))
  