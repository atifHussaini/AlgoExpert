function oneEdit(stringOne, stringTwo) {
    const stringOneArr = stringOne.split("");
    const stringTwoArr = stringTwo.split("");
    const strOneLength = stringOne.length;
    const strTwoLength = stringTwo.length;
    let count = 0;
  
    if (strOneLength > strTwoLength) {
      for (let i = 0; i < stringOneArr.length; i++) {
        const strOneEle = stringOneArr[i];
        const strTwoEle = stringTwoArr[i];
    
        if (strOneEle !== strTwoEle) {
          count++;
          stringTwoArr.splice(i,0,strOneEle);
        }
      }
    } else if (strTwoLength > strOneLength) {
        for (let i = 0; i < stringTwoArr.length; i++) {
          const strOneEle = stringOneArr[i];
          const strTwoEle = stringTwoArr[i];
      
          if (strOneEle !== strTwoEle) {
            count++;
            stringOneArr.splice(i,0,strTwoEle);
          }
        }
    } else {
        for (let i = 0; i < stringTwo.length; i++) {
          const strOneEle = stringOneArr[i];
          const strTwoEle = stringTwoArr[i];
      
          if (strOneEle !== strTwoEle) {
            count++;
          }
        }
      }

    if (count > 1) return false;
    return true;
  }
  

console.log(oneEdit("helo", "helle"))