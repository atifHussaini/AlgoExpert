function runLengthEncoding(string) {
    const encodingArr = string.split("");
    const finalArr = [];
    let count = 0;
  
    for (let i = 0; i < encodingArr.length; i++) {
      const character = encodingArr[i];
      const nextCharacter = encodingArr[i+1];
      count++;
      
      if (character !== nextCharacter) {
        finalArr.push(count + character);
        count = 0;
      } 
  
      if (count === 9) {
        finalArr.push(count + character);
        count = 0;
      }
    }
    return finalArr.join("");
}

console.log(runLengthEncoding("AAAAAAAAAAAAAABBCCCCDD"))