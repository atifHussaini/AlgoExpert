function balancedBrackets(string) {
    const stringArr = string.split("");

  for (let i = 0; i < stringArr.length; i++) {
    const current = stringArr[i];

    if (current === '[') {
      let complete = false;
      
      for (let j = i+1; j < stringArr.length; j++) {
        const compare = stringArr[j];

        if (compare === ']') {
          stringArr.splice(j,1);
          complete = true;
          break;
        }
      }
      if (!complete) return false; 
    }
    if (current === '(') {
      let complete = false;
      
      for (let j = i+1; j < stringArr.length; j++) {
        const compare = stringArr[j];

        if (compare === ')') {
          stringArr.splice(j,1);
          complete = true;
          break;
        }
      }
      if (!complete) return false;
    }
    if (current === '{') {
      let complete = false;
      
      for (let j = i+1; j < stringArr.length; j++) {
        const compare = stringArr[j];

        if (compare === '}') {
          stringArr.splice(j,1);
          complete = true;
          break;
        }
      }
      if (!complete) return false;
    }
    if (current === ']' || current === ')' || current === '}') return false;
  }
  return true;
}

  console.log(balancedBrackets("{[[[[({(}))]]]]}"))     