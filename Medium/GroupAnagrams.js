function groupAnagrams(words) {
    const anagramArr = [];
  
    for (let i = 0; i < words.length; i++) {
      const current = words[i];
      let workingArr = [current];
      const currentMap = new Map ();
  
      for (let j = 0; j < current.length; j++) {
        const character = current[j];
  
        if (!currentMap.has(character)) {
          currentMap.set(character, 1);
        } else { 
          currentMap.set(character, currentMap.get(character) + 1);
        }
      }
  
      for (let k = i+1; k < words.length;) {
        const compare = words[k];
        const compareMap = new Map ();
  
        for (let l = 0; l < compare.length; l++) {
          const character = compare[l];
          
          if (!compareMap.has(character)) {
            compareMap.set(character, 1);
          } else {
            compareMap.set(character, compareMap.get(character) + 1);
          }
        }
  
        let anagram = false;
        for (const [character, count] of currentMap) {
          if (currentMap.size !== compareMap.size) break;
          if (!compareMap.has(character)) {
            anagram = false;
            break;
          }
          if (compareMap.get(character) !== count) {
            anagram = false
            break;
          }
          else {
            anagram = true
          }
        }
  
        if (anagram) {
          workingArr.push(compare);
          words.splice(k,1);
        } else {
          k++;
        }
      }
      anagramArr.push(workingArr);
      workingArr = [];
    }
    return anagramArr;
}

console.log(groupAnagrams(["cinema", "a", "flop", "iceman", "meacyne", "lofp", "olfp"]))
