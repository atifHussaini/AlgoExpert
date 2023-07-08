function reverseWordsInString(string) {
    const finalArr = [];
    let word = []
  
    for (let i = 0; i < string.length; i++) {
      const current = string[i];
    
      if (current !== " ") {
        word.push(current);
      } else if (current === " " && word.length) {
        finalArr.unshift(word.join(""));
        finalArr.unshift(current);
        word = [];
      } else {
        finalArr.unshift(current);
      }
    }
    finalArr.unshift(word.join(""));
    return finalArr.join("");
}

console.log(reverseWordsInString("AlgoExpert is the best!"));