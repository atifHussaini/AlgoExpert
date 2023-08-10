function canSum (targetSum, array) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of array) {
        const remainder = targetSum - num;
        console.log(remainder)
        if(canSum(remainder, array)) return true;
        else {continue}
    }
    return false;
}

console.log(canSum(7,[5,3,4,7]))
// console.log(canSum(300,[7,14]))