function canSum (targetSum, array, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of array) {
        const remainder = targetSum - num;
        console.log(memo)
        if(canSum(remainder, array, memo)) {
            memo[remainder] = true
             return true;
        }
        else {
            continue;
        }
        
    }
    memo[targetSum] = false
    return false;
}

console.log(canSum(7,[5,3,4,7]))
// console.log(canSum(300,[7,14]))