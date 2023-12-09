// function isValidSubsequence(array, sequence) {
//   let result = '';
//   let finder = 0;
//   let current = 0;

//   while (finder <= array.length) {
//     if (sequence[current] === array[finder]) {
//       result = true;
//       finder++;
//       current++;
//     } else {
//       result = false;
//       finder++
//     }
//   }
//   return result;
// }

 
function isValidSubsequence(array, sequence) {
  const seqLength = sequence.length;
  let count = 0;
  let start = 0;
  let valid = false;
  
  while (count < seqLength && start !== array.length) {
    for (let i = start; i < array.length;) {
      const current = array[i];

      if (current === sequence[count]) {
        start++;
        count++;
        valid = true;
        break;
      } else {
        start++;
        valid = false;
        break;
      }
    }
  }
  return valid;
}

console.log(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]))