function caesarCipherEncryptor(string, key) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const arrStr = string.split("");
  
    for (let i = 0; i < arrStr.length; i++) {
      const letter = arrStr[i];
      const letterIndex = alphabet.indexOf(letter);
      const newIndex = (letterIndex + key) % 26;
  
      arrStr[i] = alphabet[newIndex];
    }
    return arrStr.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));