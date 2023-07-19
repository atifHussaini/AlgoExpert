function minimumCharactersForWords(words) {
    const finalMap = new Map();
    const outputArray = [];
  
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      const wordArray = currentWord.split("");
      const wordMap = new Map();
  
      for (let j = 0; j < wordArray.length; j++) {
        const character = wordArray[j];
  
        if (!wordMap.has(character)) {
          wordMap.set(character, 1);
        } else {
          wordMap.set(character, wordMap.get(character) + 1);
        }
      }
  
      for (const [character, value] of wordMap) {
        if (!finalMap.has(character)) {
          finalMap.set(character, value);
        } else {
          if (value > finalMap.get(character)) {
            finalMap.set(character, value);
          }
        }
      }
    }
  
    for (let [character, value] of finalMap) {
      for (let i = 0; i < value; i++) {
        outputArray.push(character);
      }
    }
    return outputArray;
}

console.log(minimumCharactersForWords(["Abc", "baVcc", "aaaa", "cdeE", "efg", "gead"]))