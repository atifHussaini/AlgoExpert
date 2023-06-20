function semordnilap(words) {
    const arr = [];
    const convertedSet = new Set(words);
  
    for (let i = 0; i < words.length; i++) {
      const reverseWord = words[i].split("").reverse().join("");
      if (convertedSet.has(reverseWord) && words[i] !== reverseWord) {
        arr.push([words[i], reverseWord]);
        convertedSet.delete(words[i]);
        convertedSet.delete(reverseWord);
      }
    }
    return arr;
}

console.log(semordnilap(["abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba"]))