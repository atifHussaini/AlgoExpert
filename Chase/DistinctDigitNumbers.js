function countNumbers (array) {
    let count = 0;
    let workingArr = [];

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const lowerTier = current[0];
        const upperTier = current[1];
        const difference = upperTier - lowerTier + 1;

        for (let j = lowerTier; j <= upperTier; j++) {
            const element = j;
            workingArr.push(element)
        }
        console.log(workingArr)

        for (let k = 0; k < workingArr.length; k++) {
            const current = workingArr[k];
            const stringCurrent = current.toString();
            const workingSet = new Set();
    
            for (let l = 0; l < stringCurrent.length; l++) {
                const element = stringCurrent[l];
                
                if (!workingSet.has(element)) {
                    workingSet.add(element);
                } else {
                    count++
                    break;
                }
            }
            workingSet.delete();
        }
        console.log(difference - count)
        workingArr = [];
        count = 0;
    }
}

console.log(countNumbers([[1,20], [9,19], [1,100]]))