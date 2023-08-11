function howSum (targetSum, numbers) {
    if (targetSum === 0 ) return [];
    if (targetSum < 0) return null
    
    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum (remainder, numbers);

        if (remainderResult !== null) return [...remainderResult, num]
        
    }
    return null;
}

console.log(howSum(7,[5,3,4,7]))