function countConstruct (target, wordBank) {
    if (target === '') return true;

    let totalCount = 0;

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const remainder = target.replace(word,"");
            const numWaysForRest = countConstruct(remainder, wordBank);
            totalCount += numWaysForRest;
        }
    }
    return totalCount;
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))