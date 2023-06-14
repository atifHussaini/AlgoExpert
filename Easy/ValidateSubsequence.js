function isValidSubsequence(array, sequence) {
  let result = '';
  let finder = 0;
  let current = 0;

  while (finder <= array.length) {
    if (sequence[current] === array[finder]) {
      result = true;
      finder++;
      current++;
    } else {
      result = false;
      finder++
    }
  }
  return result;
}

  console.log(isValidSubsequence([5,1,22,25,6,-1,8,6,10], [1,-1,6,10]))