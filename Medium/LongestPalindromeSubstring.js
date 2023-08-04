function longestPalindromicSubstring(string) {
    if (string.length === 1) return string;
    
    const workingArr = string.split("");
    const potentialArr = [];
    
    for (let i = 0; i < workingArr.length; i++) {
      const start = workingArr[i];
  
      for (let j = i+1; j < workingArr.length; j++) {
        const end = workingArr[j];
  
        if (start === end) potentialArr.push(workingArr.slice(i, j + 1));
      }
    }
    let count = 0;
    
    while (count < potentialArr.length) {
      const potentialPalindrome = potentialArr[count];
      let left = 0;
      let right = potentialPalindrome.length - 1;
      let isPalindrome = true;
  
      while (left < right) {
        const palindromeCheckLeft = potentialPalindrome[left];
        const palindromeCheckRight = potentialPalindrome[right];
        
        if (palindromeCheckLeft !== palindromeCheckRight) {
          potentialArr.splice(count,1);
          isPalindrome = false;
          break;
        } else { 
          left++;
          right--;
        }
      }
  
      if (isPalindrome) count++;
    }
  
    let max = 0;
    let stringAnswer;
    potentialArr.forEach((element) => {
      if (element.length > max) {
        max = element.length;
        stringAnswer = element.join("");
      }
    });
    return stringAnswer;
  }

  console.log(longestPalindromicSubstring("noon high it is"))