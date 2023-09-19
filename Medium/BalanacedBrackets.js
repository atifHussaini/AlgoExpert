// function balancedBrackets(string) {
//     const stringArr = string.split("");

//   for (let i = 0; i < stringArr.length; i++) {
//     const current = stringArr[i];

//     if (current === '[') {
//       let complete = false;
      
//       for (let j = i+1; j < stringArr.length; j++) {
//         const compare = stringArr[j];

//         if (compare === ']') {
//           stringArr.splice(j,1);
//           complete = true;
//           break;
//         }
//       }
//       if (!complete) return false; 
//     }
//     if (current === '(') {
//       let complete = false;
      
//       for (let j = i+1; j < stringArr.length; j++) {
//         const compare = stringArr[j];

//         if (compare === ')') {
//           stringArr.splice(j,1);
//           complete = true;
//           break;
//         }
//       }
//       if (!complete) return false;
//     }
//     if (current === '{') {
//       let complete = false;
      
//       for (let j = i+1; j < stringArr.length; j++) {
//         const compare = stringArr[j];

//         if (compare === '}') {
//           stringArr.splice(j,1);
//           complete = true;
//           break;
//         }
//       }
//       if (!complete) return false;
//     }
//     if (current === ']' || current === ')' || current === '}') return false;
//   }
//   return true;
// }

function balancedBrackets(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const current = string[i];
    const peak = stack[stack.length-1];

    if (current === "[" || current === "{" || current === "(") stack.push(current);
    else {
      if (current === "]") {
        if (peak === "[") {
          stack.pop();
        } else {
          return false;
        }
      } else if (current === "}") {
        if (peak === "{") {
          stack.pop();
        } else {
          return false;
        }
      } else if (current === ")") {
        if (peak === "(") {
          stack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets("(a)"))     