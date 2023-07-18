function levenshteinDistance(str1, str2) {
    const str1Array = str1.split("");
    const str2Array = str2.split("");
    const length1 = str1Array.length;
    const length2 = str2Array.length;
    let count = 0;
  
    if (length1 > length2) {
      for (let i = 0; i < str1Array.length; i++) {
        const current = str1Array[i];
        const compare = str2Array[i];
        const newLength1 = str1Array.length;
        const newLength2 = str2Array.length;
        const next1 = str1Array[i+1];
        const next2 = str2Array[i+1];
  
        if (current !== compare && next1 !== next2) {
          str2Array.splice(i,0, current);
          count++;
        } else if (current !== compare && next1 === next2) {
            str2Array.splice(i,1, current);
            count++;
        }
      }
    } else if (length2 > length1) {
        for (let i = 0; i < str2Array.length; i++) {
            const current = str2Array[i];
            const compare = str1Array[i];
            const next1 = str1Array[i+1];
            const next2 = str2Array[i+1];
            const newLength1 = str1Array.length;
            const newLength2 = str2Array.length;
    
            if (current !== compare && next2 !== next1) {
              str1Array.splice(i,0, current);
              count++;
            } else if (current !== compare && next1 === next2) {
                str1Array.splice(i,1, current);
                count++;
            }
        } 
    } else {
        for (let i = 0; i < str1Array.length; i++) {
            const current = str1Array[i];
            const compare = str2Array[i];
            const next1 = str1Array[i+1];
            const next2 = str2Array[i+1];
            const newLength1 = str1Array.length;
            const newLength2 = str2Array.length;
    
            if (current !== compare) {
                str2Array.splice(i,1, current);
                count++;
            } 
        }
    }
    return count;
}

  console.log(levenshteinDistance("abc", "yabd"))